package com.jeb.kitchensink.controller

import com.jeb.kitchensink.model.Member
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class MemberController {

    @RequestMapping("/lalala")
    fun getMembers(): List<Member> {
        return listOf(Member(1, "John Doe", "blah@foo.com", "800-588-2300"))
    }
}
