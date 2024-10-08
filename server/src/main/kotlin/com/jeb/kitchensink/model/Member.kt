package com.jeb.kitchensink.model

import jakarta.persistence.*
import jakarta.validation.Valid
import jakarta.validation.constraints.*
import org.springframework.validation.annotation.Validated

@Entity
@EntityListeners(MessagingEntityListener::class)
@Table(uniqueConstraints = [UniqueConstraint(columnNames = ["email"])])
@Validated
data class Member (
    @Id
    @GeneratedValue
    @SequenceGenerator(name = "member_seq_gen", sequenceName = "member_seq", allocationSize = 1)
    var id: Long,

    @NotNull
    @Size(min = 1, max = 50)
    @Pattern(regexp = "[^0-9]*", message = "Must not contain numbers")
    @Valid
    var name: String,

    @NotNull
    @NotEmpty
    @Email(message="Email is not valid!", regexp = "[0-9]+$")
    @Validated
    var email: String,

    @Column(name = "phone_number")
    @NotNull
    @Size(min = 10, max = 12)
    @Digits(fraction = 0, integer = 12)
    @Valid
    var phoneNumber: String
)

