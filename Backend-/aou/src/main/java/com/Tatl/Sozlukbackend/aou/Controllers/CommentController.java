package com.Tatl.Sozlukbackend.aou.Controllers;

import com.Tatl.Sozlukbackend.aou.Services.CommentService;
import com.Tatl.Sozlukbackend.aou.entities.Comment;
import com.Tatl.Sozlukbackend.aou.repository.CommentRepo;
import com.Tatl.Sozlukbackend.aou.repository.PostRepo;
import com.Tatl.Sozlukbackend.aou.repository.UserRepository;
import com.Tatl.Sozlukbackend.aou.request.CommentCreateRequest;
import com.Tatl.Sozlukbackend.aou.request.CommentUpdateRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/comments")

public class CommentController {
    private CommentService commentService;
    private UserRepository userRepository;
    private PostRepo postRepo;
    private CommentRepo commentRepo;

    public CommentController() {
    }

    public CommentController(CommentService commentService, UserRepository userRepository, PostRepo postRepo,CommentRepo commentRepo) {
        this.commentService = commentService;
        this.userRepository = userRepository;
        this.postRepo = postRepo;
        this.commentRepo = commentRepo;
    }



    @GetMapping
    public List <Comment> getAllComments(@RequestParam Optional <Long> userId, @RequestParam Optional<Long> postId){
        return  commentService.getAllCommentsWithParam(userId,postId);
    }

    @PostMapping
    public Comment createOneComment(CommentCreateRequest request) {
        // Kullanıcı ve Post var mı kontrolü
        userRepository.findById(request.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("Kullanıcı bulunamadı. UserId: " + request.getUserId()));
        postRepo.findById(request.getPostId())
                .orElseThrow(() -> new IllegalArgumentException("Post bulunamadı. PostId: " + request.getPostId()));

        // Yeni bir Comment oluştur
        Comment newComment = new Comment();
        newComment.setUser(userRepository.getById(request.getUserId()));
        newComment.setPost(postRepo.getById(request.getPostId()));
        newComment.setText(request.getText());

        // Comment'i kaydet
        return commentRepo.save(newComment);
    }
    @GetMapping("/{commentId}")
    public Comment getOneComment(@PathVariable Long commentId){
        return commentService.getOneCommentById(commentId);
    }

    @PutMapping("/{commentId}")
    public Comment updateOneComment(@PathVariable Long commentId, @RequestBody CommentUpdateRequest commentUpdate) {
        return commentService.updateOneComment(commentId,commentUpdate);
    }
    @DeleteMapping("/{commentId}")
        public void deleteOneComment(@PathVariable Long commentId){
        commentService.deleteOneCommentById(commentId);
    }

}

