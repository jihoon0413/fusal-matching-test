package com.example.fusalmatching.repository;

import com.example.fusalmatching.domain.Field;
import com.example.fusalmatching.domain.StadiumReview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StadiumReviewRepository extends JpaRepository<StadiumReview, Long> {
}
