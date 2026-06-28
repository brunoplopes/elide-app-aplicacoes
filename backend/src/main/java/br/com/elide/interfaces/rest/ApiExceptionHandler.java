package br.com.elide.interfaces.rest;

import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.NoSuchElementException;

@RestControllerAdvice
public class ApiExceptionHandler {
    @ExceptionHandler({IllegalArgumentException.class, ConstraintViolationException.class, MethodArgumentNotValidException.class})
    ProblemDetail badRequest(Exception exception) {
        var detail = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);
        detail.setTitle("Invalid request");
        detail.setDetail(exception.getMessage());
        return detail;
    }

    @ExceptionHandler(NoSuchElementException.class)
    ProblemDetail notFound(NoSuchElementException exception) {
        var detail = ProblemDetail.forStatus(HttpStatus.NOT_FOUND);
        detail.setTitle("Resource not found");
        detail.setDetail(exception.getMessage());
        return detail;
    }
}
