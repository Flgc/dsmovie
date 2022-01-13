package biz.fabiotecnico1.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import biz.fabiotecnico1.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
