package com.Tatl.Sozlukbackend.aou.Controllers;

import com.Tatl.Sozlukbackend.aou.Services.PostService;
import com.Tatl.Sozlukbackend.aou.entities.Post;
import com.Tatl.Sozlukbackend.aou.request.PostCreateRequest;
import com.Tatl.Sozlukbackend.aou.request.PostUpdateRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
public class PostController {
    private PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public List<Post> getAllPost(@RequestParam Optional<Long> userId){
        return postService.getAllPost(userId);
    }
    @PostMapping
    public Post createOnePost(@RequestBody PostCreateRequest newPostRequest){
        return postService.createOnePost(newPostRequest);
    }
    @GetMapping("/{postId}")
    public Post getOnePost(@PathVariable Long postId){
        return postService.getOnePost(postId);
    }
    @PutMapping("/{postId}")
    public Post updateOnePost(@PathVariable Long postId, @RequestBody PostUpdateRequest updatePostRequest){
        return postService.updateOnePostId(postId,updatePostRequest);
    }
    @DeleteMapping("/{postId}")
    public void deleteOnePost(@PathVariable Long postId){
         postService.deleteOnePostId(postId);
    }





}
