export class GeneralModel {

    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: string,
        public address: string,
        public profession: string
    ) {
    }

    public static empty(): GeneralModel {
        return new GeneralModel('', '', '', '', '', '');
    }
}
