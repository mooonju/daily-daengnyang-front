import React, { useState } from "react";
import MyCalendar from "./calendar";

const Header =  () =>  {
    
    return(
<div fragment="header">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">개묘한 이야기</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" >캘린더</a></li>
        <li class="nav-item"><a class="nav-link" href="/">다이어리</a></li>
      </ul>

      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link" aria-current="page" href="/">알람</a></li>

        <li class="nav-item"><a class="nav-link" href="/">오늘의 일정</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link" data-bs-toggle="dropdown" aria-expanded="false">마이페이지
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-caret-down" viewBox="0 0 16 16">
              <path
                  d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
            </svg>
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-item" onclick="location.href='/boards/list'">그룹 관리</li>
            <li class="dropdown-item" href="#">반려동물 관리</li>
            <li class="dropdown-item" href="#">찜 리스트</li>
            <li class="dropdown-item" href="#">로그아웃</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    );
} 

export default Header