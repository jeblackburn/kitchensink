package com.jeb.kitchensink.repository

import com.jeb.kitchensink.model.Member
import org.springframework.context.annotation.Profile
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.repository.query.Param
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@Profile("jpa")
@RepositoryRestResource(collectionResourceRel = "members", path = "members")
interface MemberRepository : PagingAndSortingRepository<Member,  Long>, CrudRepository<Member, Long> {
    fun findByEmail(@Param("email") email: String): List<Member>
}
