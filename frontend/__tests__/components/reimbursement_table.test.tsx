describe('ReimbursementTable', () => {
  it('should render a Table with the five expected columns', () => {
    // TODO
  })

  it('should render as many TableRow columns as needed +1 for the header', () => {
    // TODO (when isEditable is false, or separate test?)
  })

  it('should display rows received from getReimbrusements with formatting', () => {
    // TODO
  })

  it('should display all reimbursements if filteredStatus is undefined', () => {
    // TODO
  })

  it('should filter reimbursements based off filterStatus when filteredStatus is set', () => {
    // TODO - tests per ReimbursementStatus
  })

  it('should not render PopupDialog components by default', () => {
    // TODO (i.e. should accept an optional isEditable that defaults to false)
  })

  it('should render PopupDialog components when isEditable is set to true', () => {
    // TODO
  })

  it('should use a render PopupDialog with correct props if isEditable is set to true', () => {
    // TODO
    // trigger: TableRow with 5 TableCells
    // description: "Management"
    // title: reimbursement's description
    // formContent: SelectStatus with onStatusChange and placeholder
    // onSubmit: function that'll call updateReimbursement
    // errorAlertMessage: "Failed to update"
    // moduleClassName (test this? see TODO at bottom of this file): "w-[400px]"
  })

  it('should call updateReimbursement with reimbursement id & newStatus upon PopupDialog submission', () => {
    // TODO
  })

  it('should return response from updateReimbursement upon PopupDialog submission', () => {
    // TODO
  })

  it('should throw when updateReimbursement response is not okay upon PopupDialog submission', () => {
    // TODO
  })

  // TODO: test spacing and padding?
})
