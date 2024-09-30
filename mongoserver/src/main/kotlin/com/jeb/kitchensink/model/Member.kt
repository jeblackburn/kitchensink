package com.jeb.kitchensink.model

import jakarta.validation.Valid
import jakarta.validation.constraints.*
import org.springframework.data.annotation.Id
import org.springframework.validation.annotation.Validated
import java.util.*

@Validated
data class Member (
    @Id
    var id: String = UUID.randomUUID().toString(),

    @NotNull
    @Size(min = 1, max = 50)
    @Pattern(regexp = "[^0-9]*", message = "Must not contain numbers")
    @Valid
    var name: String,

    @NotNull
    @NotEmpty
    @Email(message="Email is not valid!")
    @Validated
    var email: String,

    @NotNull
    @Size(min = 10, max = 12)
    @Digits(fraction = 0, integer = 12)
    @Valid
    var phoneNumber: String
)

