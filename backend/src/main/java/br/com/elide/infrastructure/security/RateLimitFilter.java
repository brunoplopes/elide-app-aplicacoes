package br.com.elide.infrastructure.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@Component
public class RateLimitFilter extends OncePerRequestFilter {
    private final Map<String, Window> windows = new ConcurrentHashMap<>();

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
        throws ServletException, IOException {
        var key = request.getRemoteAddr() + ":" + request.getRequestURI();
        var window = windows.compute(key, (ignored, current) -> current == null || current.expiresAt.isBefore(Instant.now())
            ? new Window(Instant.now().plusSeconds(60), new AtomicInteger())
            : current);
        if (window.count.incrementAndGet() > 180) {
            response.setStatus(429);
            return;
        }
        chain.doFilter(request, response);
    }

    private record Window(Instant expiresAt, AtomicInteger count) {
    }
}

