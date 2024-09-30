package com.jeb.kitchensink

import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.context.annotation.Profile

@Profile("jpa")
@SpringBootTest
class KitchenSinkApplicationTests {

	@Test
	fun contextLoads() {

	}

}
