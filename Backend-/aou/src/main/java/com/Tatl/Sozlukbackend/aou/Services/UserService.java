package com.Tatl.Sozlukbackend.aou.Services;

import com.Tatl.Sozlukbackend.aou.entities.User;
import com.Tatl.Sozlukbackend.aou.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User getOneUser(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    public User updateOneUser(Long userId, User newUser) {
        //custom exception
        Optional<User> user=userRepository.findById(userId);
        if(user.isPresent()){
            User foundUser=user.get();
            foundUser.setUsername(newUser.getUsername());
            foundUser.setPassword(newUser.getPassword());
            userRepository.save(foundUser);
            return foundUser;
        }
        else return null;
    }

    public void deleteOneUser(Long userId) {
         userRepository.deleteById(userId);
    }


}
