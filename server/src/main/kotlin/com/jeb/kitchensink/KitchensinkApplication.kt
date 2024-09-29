package com.jeb.kitchensink

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class KitchensinkApplication

fun main(args: Array<String>) {
	runApplication<KitchensinkApplication>(*args)
}
