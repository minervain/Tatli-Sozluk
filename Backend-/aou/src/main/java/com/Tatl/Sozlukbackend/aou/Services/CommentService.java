package com.Tatl.Sozlukbackend.aou.Services;

import com.Tatl.Sozlukbackend.aou.entities.Comment;
import com.Tatl.Sozlukbackend.aou.entities.Post;
import com.Tatl.Sozlukbackend.aou.entities.User;
import com.Tatl.Sozlukbackend.aou.repository.CommentRepo;
import com.Tatl.Sozlukbackend.aou.request.CommentCreateRequest;
import com.Tatl.Sozlukbackend.aou.request.CommentUpdateRequest;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    private CommentRepo commentRepository;
    private UserService userService;
    private PostService postService;

    public CommentService(CommentRepo commentRepository, UserService userService, PostService postService) {
        this.commentRepository = commentRepository;
        this.userService = userService;
        this.postService = postService;
    }

    public List<Comment> getAllCommentsWithParam(Optional<Long> userId, Optional<Long> postId) {
        if (userId.isPresent()&& postId.isPresent()){
            return  commentRepository.findByUserIdAndPostId(userId.get(),postId.get());
        }
        else if(userId.isPresent()){
            return  commentRepository.findByUserId(userId.get());
        }
        else if(postId.isPresent()){
            return commentRepository.findByPostId(postId.get());
        }
        return commentRepository.findAll();
    }


    public Comment getOneCommentById(Long commentId) {
        return commentRepository.findById(commentId).orElse(null);

    }

    public Comment createOneComment(CommentCreateRequest request) {
        User user =userService.getOneUser(request.getUserId());
        Post post=postService.getOnePost(request.getPostId());
        if(user !=null && post!=null){
            Comment commentToSave=new Comment();
            commentToSave.setId(request.getId());
            commentToSave.setPost(post);
            commentToSave.setUser(user);
            commentToSave.setText(request.getText());
            return commentRepository.save(commentToSave);
        }
        else

        return null;
    }

    public Comment updateOneComment(Long commentId, CommentUpdateRequest commentUpdate) {
        Optional<Comment> comment = commentRepository.findById(commentId);
        if (comment.isPresent()) {
            Comment commentToUpdate = comment.get();
            commentToUpdate.setText(commentUpdate.getText());
            return  commentRepository.save(commentToUpdate);

        } else
            return null;

    }

    public void deleteOneCommentById(Long commentId) {
        commentRepository.deleteById(commentId);
    }
}
