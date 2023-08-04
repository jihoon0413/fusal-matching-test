package com.example.fusalmatching.domain;

import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;

@ToString
@Getter
@Entity
public class TeamMatching {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Team team;

    @ManyToOne
    private MatchingRecord matchingRecord;

    private boolean evalOpposite;

    private boolean evalStadium;



}
