package com.example.fusalmatching.repository;

import com.example.fusalmatching.domain.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, String> {
}
