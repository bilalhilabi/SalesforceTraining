trigger ContactTrigger on Contact (before insert, before update) {
    Exam_Q2_Handler.checkEmail(Trigger.new);
}