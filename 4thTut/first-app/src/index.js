import {choice,remove} from './helpers';
import food from './fruites';

let fr=choice(food);
console.log(fr);
console.log(remove(food,fr));