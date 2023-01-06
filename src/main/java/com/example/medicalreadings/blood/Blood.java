package com.example.medicalreadings.blood;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@Entity(name = "Blood")
@Table(name = "blood")
public class Blood {

    @Id
    @SequenceGenerator(name = "blood_sequence", sequenceName = "blood_sequence", allocationSize = 1)
    @GeneratedValue(generator = "blood_sequence", strategy = GenerationType.SEQUENCE)
    private Long id;

    private int reading;

    @Enumerated(EnumType.STRING)
    private TimeOfReading timeOfReading;

    private LocalDate date;


    public Blood(int reading, TimeOfReading timeOfReading, LocalDate date) {
        this.reading = reading;
        this.timeOfReading = timeOfReading;
        this.date = date;
    }

    public Blood() {

    }
}
