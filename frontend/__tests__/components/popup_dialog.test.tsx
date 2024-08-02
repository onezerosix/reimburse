describe('PopupDialog', () => {
  // TODO: should accept trigger, description, title, formContent, onSubmit, errorAlertMessage, and optional moduleClassName as props?

  it('should render one Dialog', () => {
    // TODO
  })

  it('should render one DialogTrigger within the Dialog', () => {
    // TODO
  })

  it('should render one DialogContent within the Dialog', () => {
    // TODO
  })

  it('should render one DialogHeader within the DialogTrigger', () => {
    // TODO
  })
  
  // TODO: rest of "render one ... within the ..."
  // TODO: tests like "renders trigger prop within the DialogTrigger"

  // TODO: tests for open and onOpenChange of Dialog?
  // TODO: tests for Button diabled prop
  
  // TODO: should call handleSubmit upon form submission
  it('should prevent default event behavior upon form submission', () => {
    // TODO
  })
  /* TODO: upon form submission
   * set isLoading to true
   * await onSubmit(event) function call
   * set isOpen to false and call router.refresh() if response from onSubmit is okay
   * catch errors from onSubmit, log them to the console, and display alert message
   * finally after onSubmit call, set isLoading to false
   */
})
