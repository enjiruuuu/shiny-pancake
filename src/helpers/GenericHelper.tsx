export default class GenericHelper {
    public static formatDate(inputDate: Date): string {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

        const date: string = inputDate.getDate().toString();
        const month: string = months[inputDate.getMonth()];
        const year: string = inputDate.getFullYear().toString();

        return date + ' ' + month + ' ' + year;
    }

    public static toggleScroll(): void {
        if(document.body.style.overflow == 'hidden') {
            document.body.style.overflow = 'scroll';
        }
        else {
            document.body.style.overflow = 'hidden';
        }
    }
}