package biz.fabiotecnico1.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import biz.fabiotecnico1.dsmovie.entities.Score;
import biz.fabiotecnico1.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
