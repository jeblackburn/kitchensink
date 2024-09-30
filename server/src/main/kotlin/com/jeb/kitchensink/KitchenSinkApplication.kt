package com.jeb.kitchensink

import com.jeb.kitchensink.model.Member
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.rest.core.config.RepositoryRestConfiguration
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer


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

@Configuration
class CorsConfig: WebMvcConfigurer {
	override fun addCorsMappings(registry: CorsRegistry) {
		println("cors mapping")
		registry.addMapping("/**")
	}
}

fun main(args: Array<String>) {
	runApplication<KitchenSinkApplication>(*args)
}
