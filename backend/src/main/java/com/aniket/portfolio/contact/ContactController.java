package com.aniket.portfolio.contact;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {
    private final ContactMessageRepository repository;

    public ContactController(ContactMessageRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Map<String, String> create(@Valid @RequestBody ContactRequest request) {
        ContactMessage message = new ContactMessage(
                request.name().trim(),
                request.email().trim(),
                request.subject().trim(),
                request.message().trim()
        );
        repository.save(message);
        return Map.of("status", "success", "message", "Thanks for reaching out.");
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "up");
    }
}
