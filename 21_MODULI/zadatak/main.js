/*
import { generateList ,generateItem as generateListItem} from "./modules/list.js";
import { generateTable, generateTableRow, generateItem  as generateTableItem} from "./modules/table.js";
*/

import * as List from './modules/list.js';
import * as Table from './modules/table.js';

let ul = List.generateList(document.body);
List.generateItem(ul, 'images/sl1.png');
List.generateItem(ul, 'images/sl2.png');
List.generateItem(ul, 'images/sl3.png');

let tabela = Table.generateTable(document.body);
let tr = Table.generateTableRow(tabela);
Table.generateItem(tr,'images/sl1.png');
Table.generateItem(tr,'images/sl2.png');
Table.generateItem(tr,'images/sl3.png');

