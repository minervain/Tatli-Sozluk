package com.Tatl.Sozlukbackend.aou.Controllers;

import com.Tatl.Sozlukbackend.aou.Services.CommentService;
import com.Tatl.Sozlukbackend.aou.entities.Comment;
import com.Tatl.Sozlukbackend.aou.request.CommentCreateRequest;
import com.Tatl.Sozlukbackend.aou.request.CommentUpdateRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/comments")

public class CommentController {
    private CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping
    public List <Comment> getAllComments(@RequestParam Optional <Long> userId, @RequestParam Optional<Long> postId){
        return  commentService.getAllCommentsWithParam(userId,postId);
    }

    @PostMapping
    public Comment createOneComment(@RequestBody CommentCreateRequest request){
        return commentService.createOneComment(request);
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

