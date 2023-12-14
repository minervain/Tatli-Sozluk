package com.Tatl.Sozlukbackend.aou.Controllers;

import com.Tatl.Sozlukbackend.aou.Services.UserService;
import com.Tatl.Sozlukbackend.aou.entities.User;
import com.Tatl.Sozlukbackend.aou.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    @PostMapping
    public User createUser(@RequestBody User newUser){
        return userService.createUser(newUser);
    }
    @GetMapping("/{userId}")
    public User getOneUser(@PathVariable Long userId){
        //custom exception
        return userService.getOneUser(userId);
    }
    @PutMapping("/{userId}")
    public User updateOneUser(@PathVariable Long userId,@RequestBody User newUser){
     return userService.updateOneUser(userId,newUser);
    }
    @DeleteMapping("/{userId}")
    public void deleteOneUser(@PathVariable Long userId){
        userService.deleteOneUser(userId);
    }

}

