package com.example.medicalreadings.blood;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class BloodService {

    private final BloodRepository bloodRepository;

    public List<Blood> getAllStudents() {
        return bloodRepository.findAll();
    }

    public void addBloodReading(Blood bloodReading) {
        bloodRepository.save(bloodReading);
    }
}
