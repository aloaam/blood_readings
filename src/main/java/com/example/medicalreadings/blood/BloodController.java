package com.example.medicalreadings.blood;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(path = "api/v1/blood-readings")
public class BloodController {

    private final BloodService service;

    @GetMapping
    public List<Blood> getBloodReadings() {
        return service.getAllStudents();
    }

    @PostMapping
    public void addBloodReading(@RequestBody Blood blood) {
        service.addBloodReading(blood);
    }
}
