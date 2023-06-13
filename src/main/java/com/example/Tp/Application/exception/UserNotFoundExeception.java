package com.example.Tp.Application.exception;

public class UserNotFoundExeception extends RuntimeException{
    public UserNotFoundExeception(String message) {
        super(message);
    }
}
