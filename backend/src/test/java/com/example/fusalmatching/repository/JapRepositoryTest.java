package com.example.fusalmatching.repository;

import com.example.fusalmatching.domain.Team;
import com.example.fusalmatching.domain.TeamReview;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.assertj.core.api.Assertions.*;

@DataJpaTest
public class JapRepositoryTest {

    private final TeamRepository teamRepository;
    private final TeamReviewRepository teamReviewRepository;


    public JapRepositoryTest(
            @Autowired TeamRepository teamRepository,
            @Autowired TeamReviewRepository teamReviewRepository
            ) {
        this.teamRepository = teamRepository;
        this.teamReviewRepository = teamReviewRepository;
    }

    @DisplayName("Team,TeamReview 테스트")
    @Test
    void gives_when_then() {

        teamRepository.save(Team.of("dove1987","dove cun", "1234"));
        List<Team> teamList = teamRepository.findAll();
        Team team = teamList.get(0);
        team.setManner(0);

        teamReviewRepository.save(TeamReview.of(team, 3, 5));


//        List<TeamReview> reviewList = teamReviewRepository.findAll();
        TeamReview review = teamReviewRepository.findByTeam(team);

        int updateManner = review.getManner();
        int getMannerScore = team.getManner();

        team.setManner(getMannerScore + updateManner);

        Team updateTeam = teamRepository.saveAndFlush(team);


        assertThat(updateTeam).hasFieldOrPropertyWithValue("manner", 3);







    }


}
