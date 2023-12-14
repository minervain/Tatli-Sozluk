package com.Tatl.Sozlukbackend.aou.repository;

import com.Tatl.Sozlukbackend.aou.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepo extends JpaRepository <Comment,Long> {
    List<Comment> findByUserIdAndPostId(Long aLong, Long aLong1);

    List<Comment> findByUserId(Long aLong);

    List<Comment> findByPostId(Long aLong);
}
