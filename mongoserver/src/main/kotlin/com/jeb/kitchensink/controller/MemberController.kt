package com.jeb.kitchensink.controller

import com.jeb.kitchensink.model.Member
import com.jeb.kitchensink.repository.MemberRepository
import jakarta.validation.Valid
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@Validated
@RestController
class MemberController(val repository: MemberRepository){

    @GetMapping("/controller/members")
    fun getMembers(): List<Member> {
        return repository.findAll().toList();
    }

    @PostMapping("/controller/addmember")
    fun addMember(@RequestBody @Valid member: Member): List<Member> {
        println("Inside post request")
        println(member)
        repository.save(member)
        return repository.findAll().toList()
    }
}
