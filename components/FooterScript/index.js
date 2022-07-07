import React, { useEffect } from "react";

export default function FooterScript() {
  useEffect(function mount() {
    
    if (window.matchMedia('(min-width: 1200px)').matches) { 
      $(".menu-item-has-children").mouseenter(function(){
        $(this).find(".menu-mega").slideDown();
      });
      $(".menu-item-has-children").mouseleave(function(){
        $(this).find(".menu-mega").slideUp();
      });      
    }
    
    $(window).scroll(function() {

        if ($(window).scrollTop() >= 50) {
            $('header').addClass('menu-fixed');
        }
        else {
            $('header').removeClass('menu-fixed');
        }
        
    });

    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-mobile-toggle');
    const submenuIcon = document.querySelector('.submenu-icon')

    menuToggle.addEventListener('click', () => {
      toggleMenu();
    });

    $('.submenu-icon').on('click', function(){
      if($(this).closest(".menu-item").find('.menu-subs').hasClass('active-sub-menu')){
        $('.menu-item').closest(".menu-item").find('.menu-subs').removeClass('active-sub-menu');
        $('.menu-item').closest(".menu-item").find('.menu-subs').find('.menucolumn').slideUp();
      }else{
        $('.menu-item').closest(".menu-item").find('.menu-subs').removeClass('active-sub-menu');
        $('.menu-item').closest(".menu-item").find('.menu-subs').find('.menucolumn').slideUp();
        $(this).closest(".menu-item").find('.menu-subs').addClass('active-sub-menu');
        $(this).closest(".menu-item").find('.menu-subs').find('.menucolumn').addClass('clearfix');
        $(this).closest(".menu-item").find('.menu-subs').find('.menucolumn').slideDown();
      }
    });
    $('.sub-submenu-icon').on('click', function(){
      if($(this).closest(".menulist-item").find('.sub-submenu').hasClass('active-sub-submenu')){
        $('.menulist-item').closest(".menulist-item").find('.sub-submenu').removeClass('active-sub-submenu');
        $('.menulist-item').closest(".menulist-item").find('.sub-submenu').slideUp();
      }else{
        $('.menulist-item').closest(".menulist-item").find('.sub-submenu').removeClass('active-sub-submenu');
        $('.menulist-item').closest(".menulist-item").find('.sub-submenu').slideUp();
        $(this).closest(".menulist-item").find('.sub-submenu').addClass('active-sub-submenu');
        $(this).closest(".menulist-item").find('.sub-submenu').slideDown();
      }
    });

    // submenuIcon.addEventListener('click', () => {
    //   console.log($(this));
    //   
    // });

    function toggleMenu() {
      menu.classList.toggle('activeMenu');
    }

  });

  return null;
}