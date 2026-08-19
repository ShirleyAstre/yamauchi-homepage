// レビュー一覧の表示順を data-order の数字で並べ替えます。
// 小さい数字ほど上に表示されます。例: 10 → 20 → 30
// 順番を入れ替えたい場合は、各 review-item の data-order だけ変更すればOKです。

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.review-list').forEach((list) => {
    const items = Array.from(list.querySelectorAll('.review-item'));

    items
      .sort((a, b) => {
        const aOrder = Number(a.dataset.order || 999999);
        const bOrder = Number(b.dataset.order || 999999);
        return aOrder - bOrder;
      })
      .forEach((item) => list.appendChild(item));

    const section = list.closest('.section');
    const empty = section ? section.querySelector('.empty') : null;
    if (empty && items.length > 0) empty.hidden = true;
  });
});
