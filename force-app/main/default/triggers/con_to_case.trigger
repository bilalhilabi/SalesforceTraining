trigger con_to_case on contact (after insert) {
con_to_case_Handler.createCase(trigger.new);
}