function solution(progresses, speeds) {
    const answer = [];

    // 1. 소요 일수 계산
    const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));

    // 2. 배포 그룹화 및 개수 계산
    let count = 0;     // 현재 배포 그룹에 모인 기능의 수
    let maxDay = 0;    // 현재 그룹의 배포 기준일

    for (let i = 0; i < days.length; i++) {
        const currentDay = days[i];

        if (currentDay > maxDay) {
            // 현재 기능이 기존 기준일보다 늦게 끝나면: 
            // 이전 그룹을 먼저 배포해야 합니다.

            // 이전 그룹의 개수 (count)가 0이 아니라면, answer에 추가
            if (count > 0) {
                answer.push(count);
            }

            // 새로운 그룹 시작: 이 기능을 새로운 기준일로 삼고, count를 1로 설정
            maxDay = currentDay;
            count = 1;
        } else {
            //  현재 기능이 기존 기준일보다 빨리 끝나거나 같으면:
            //  같은 그룹에 포함
            count++;
        }
    }

    // 3. 마지막에 남아있는 배포 그룹을 처리
    if (count > 0) {
        answer.push(count);
    }

    return answer;
}