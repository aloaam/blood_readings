package com.example.medicalreadings.blood;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BloodRepository extends JpaRepository<Blood, Long> {
}
