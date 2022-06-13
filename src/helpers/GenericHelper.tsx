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

    public static binarySearchCountries(arr: any, target: string): any {
        let left = 0;
        let right = arr.length - 1;
        
        while (left <= right) {
            let mid = Math.round(left + (right - left) / 2);
            let city = arr[mid].city;
            if (city === target) {
                return arr[mid];
            }

            if (target < city) {
                right = mid -1;
            }
            else if (target > city) {
                left = mid + 1;
            }
        }

        return undefined;
    }
}