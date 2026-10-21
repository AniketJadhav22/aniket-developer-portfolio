package com.aniket.portfolio.contact;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ContactRequest(
        @NotBlank @Size(min = 2, max = 100) String name,
        @NotBlank @Email @Size(max = 190) String email,
        @NotBlank @Size(min = 2, max = 180) String subject,
        @NotBlank @Size(min = 10, max = 3000) String message
) {}
