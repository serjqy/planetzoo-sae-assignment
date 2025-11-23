import $ from "jquery";

export function faqInit() {
  $(document).ready(function () {
    $(".faq-answer").hide();

    $(".faq-question").on("click", function () {
      const $answer = $(this).next(".faq-answer");

      $(".faq-answer").not($answer).slideUp().removeClass("faq-show");

      $answer.stop(true, true).slideToggle().toggleClass("faq-show");
    });
  });
}
