package com.jeb.kitchensink.repository

import com.jeb.kitchensink.model.Member
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(collectionResourceRel = "members", path = "members")
interface MemberRepository : PagingAndSortingRepository<Member,  String>, CrudRepository<Member, String> {

}
