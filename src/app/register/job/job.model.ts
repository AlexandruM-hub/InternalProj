export class JobModel{

  constructor(
    public jobTitle: string,
    public startDate: Date,
    public endDate: Date,
    public city: string,
    public companyName: string
  ) {}

}
