package br.com.elide.infrastructure.security;

import br.com.elide.infrastructure.persistence.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpMethod;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class MustChangePasswordFilter extends OncePerRequestFilter {
    private final UserRepository users;

    public MustChangePasswordFilter(UserRepository users) {
        this.users = users;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
        throws ServletException, IOException {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated() || isAllowed(request)) {
            chain.doFilter(request, response);
            return;
        }
        var username = authentication.getName();
        var mustChange = users.findByUsername(username).map(user -> user.isMustChangePassword()).orElse(false);
        if (mustChange) {
            response.sendError(HttpServletResponse.SC_FORBIDDEN, "Password change required");
            return;
        }
        chain.doFilter(request, response);
    }

    private boolean isAllowed(HttpServletRequest request) {
        var path = request.getRequestURI();
        return HttpMethod.OPTIONS.matches(request.getMethod())
            || (HttpMethod.GET.matches(request.getMethod()) && path.startsWith("/api/v1/catalog/"))
            || path.equals("/api/v1/auth/change-password")
            || path.equals("/api/v1/auth/login")
            || path.equals("/api/v1/auth/register")
            || path.equals("/api/v1/auth/forgot-password")
            || path.startsWith("/actuator/health");
    }
}
