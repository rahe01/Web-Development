function woodQuantity(chair, tabil, bed){
    const per_chair = 3;
    const per_table = 10;
    const per_bed = 50;

    const all_chair = per_chair*chair;
    const all_table = per_table* tabil;
    const all_bed = per_bed * bed;

    const total = all_bed+all_chair+all_table;
    return total;
}

console.log(woodQuantity(12,23,23))