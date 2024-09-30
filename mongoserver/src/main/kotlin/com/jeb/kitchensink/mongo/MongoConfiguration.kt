package com.jeb.kitchensink.mongo

import com.jeb.kitchensink.model.Member
import com.mongodb.AuthenticationMechanism
import com.mongodb.MongoClientSettings
import com.mongodb.MongoCredential
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Profile
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import org.springframework.data.repository.PagingAndSortingRepository

@Configuration
@EnableMongoRepositories("com.jeb.kitchensink.repository")
class MongoConfiguration: AbstractMongoClientConfiguration() {
    override fun getDatabaseName(): String {
        return "kitchensink"
    }

    override fun configureClientSettings(builder: MongoClientSettings.Builder) {
//        super.configureClientSettings(builder)
        builder
            .credential(MongoCredential.createCredential("mongouser", "admin", "mongopw".toCharArray())
                .withMechanism(AuthenticationMechanism.SCRAM_SHA_1))
    }
}

//interface MemberRepository: PagingAndSortingRepository<Member, String> {
//
//}
