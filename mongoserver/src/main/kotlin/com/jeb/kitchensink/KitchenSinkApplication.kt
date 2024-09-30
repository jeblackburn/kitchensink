package com.jeb.kitchensink

import com.jeb.kitchensink.model.Member
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.data.rest.core.config.RepositoryRestConfiguration
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer


@SpringBootApplication
class KitchenSinkApplication {
	@Bean
	fun repositoryRestConfigurer(): RepositoryRestConfigurer {
		return RepositoryRestConfigurer.withConfig { config: RepositoryRestConfiguration ->
			config.exposeIdsFor(
				Member::class.java
			)
		}
	}
}

fun main(args: Array<String>) {
	runApplication<KitchenSinkApplication>(*args)
}
