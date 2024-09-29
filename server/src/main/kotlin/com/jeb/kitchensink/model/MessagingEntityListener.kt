package com.jeb.kitchensink.model

import jakarta.persistence.PostPersist

class MessagingEntityListener {
    @PostPersist
    fun publishEntityPersisted(o: Object) {
        println("Entity persisted! $o")
    }
}