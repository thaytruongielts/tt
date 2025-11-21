import { QuestionPart, QuestionType } from './types';

export const EXERCISE_DATA: QuestionPart[] = [
  {
    id: 1,
    title: 'PHẦN 1: NHẬN DIỆN "DẤU HIỆU" (A & B)',
    description: 'Exercise 1: Chia động từ trong ngoặc.',
    objective: 'Mục tiêu: Nhìn trạng từ chỉ thời gian để xác định A (Thời) và B (Dạng).',
    questions: [
      {
        id: 1,
        type: QuestionType.FillBlank,
        text: "Be quiet! The baby {{0}} (sleep) in the next room.",
        verbs: ["sleep"],
        answers: ["is sleeping"],
        explanation: "Dấu hiệu: 'Be quiet!' -> Hành động đang xảy ra ngay lúc nói (Hiện tại tiếp diễn)."
      },
      {
        id: 2,
        type: QuestionType.FillBlank,
        text: "My father {{0}} (work) for this company for 20 years.",
        verbs: ["work"],
        answers: ["has worked", "has been working"],
        explanation: "Dấu hiệu: 'for 20 years' -> Kéo dài từ quá khứ đến hiện tại (Hiện tại hoàn thành / HTHT Tiếp diễn)."
      },
      {
        id: 3,
        type: QuestionType.FillBlank,
        text: "Look at the sky! It {{0}} (rain) heavily soon.",
        verbs: ["rain"],
        answers: ["is going to rain"],
        explanation: "Dấu hiệu: 'Look at the sky!' (Dẫn chứng cụ thể) -> Tương lai gần (be going to)."
      },
      {
        id: 4,
        type: QuestionType.FillBlank,
        text: "I usually {{0}} (go) to school by bus, but today I {{1}} (walk).",
        verbs: ["go", "walk"],
        answers: ["go", "am walking"],
        explanation: "Vế 1: 'usually' -> Thói quen (Hiện tại đơn). Vế 2: 'today' (khác thường lệ) -> Hiện tại tiếp diễn."
      },
      {
        id: 5,
        type: QuestionType.FillBlank,
        text: "At 8 PM yesterday, we {{0}} (watch) a horror movie.",
        verbs: ["watch"],
        answers: ["were watching"],
        explanation: "Dấu hiệu: 'At 8 PM yesterday' (Thời điểm cụ thể trong quá khứ) -> Quá khứ tiếp diễn."
      },
      {
        id: 6,
        type: QuestionType.FillBlank,
        text: "By the time you arrive tomorrow, we {{0}} (finish) the project.",
        verbs: ["finish"],
        answers: ["will have finished"],
        explanation: "Dấu hiệu: 'By the time + tương lai' -> Tương lai hoàn thành."
      },
      {
        id: 7,
        type: QuestionType.FillBlank,
        text: "Listen! Someone {{0}} (play) the piano.",
        verbs: ["play"],
        answers: ["is playing"],
        explanation: "Dấu hiệu: 'Listen!' -> Hành động đang xảy ra (Hiện tại tiếp diễn)."
      },
      {
        id: 8,
        type: QuestionType.FillBlank,
        text: "I {{0}} (not/see) her since we {{1}} (leave) university.",
        verbs: ["not/see", "leave"],
        answers: ["haven't seen", "left"],
        explanation: "Công thức Since: Hiện tại hoàn thành + SINCE + Quá khứ đơn."
      },
      {
        id: 9,
        type: QuestionType.FillBlank,
        text: "Water {{0}} (boil) at 100 degrees Celsius.",
        verbs: ["boil"],
        answers: ["boils"],
        explanation: "Dấu hiệu: Sự thật hiển nhiên -> Hiện tại đơn."
      },
      {
        id: 10,
        type: QuestionType.FillBlank,
        text: "Right now, they {{0}} (prepare) for the upcoming exam.",
        verbs: ["prepare"],
        answers: ["are preparing"],
        explanation: "Dấu hiệu: 'Right now' -> Hiện tại tiếp diễn."
      }
    ]
  },
  {
    id: 2,
    title: 'PHẦN 2: KỂ CHUYỆN TRONG QUÁ KHỨ',
    description: 'Exercise 2: Chia động từ để hoàn thành đoạn văn/câu sau.',
    objective: 'Mục tiêu: Phối hợp Quá khứ đơn, Quá khứ tiếp diễn và Quá khứ hoàn thành (A = PAST).',
    questions: [
      {
        id: 11,
        type: QuestionType.FillBlank,
        text: "When I walked into the room, everyone {{0}} (work).",
        verbs: ["work"],
        answers: ["was working"],
        explanation: "Hành động đang xảy ra (mọi người đang làm việc) thì hành động khác xen vào (tôi bước vào)."
      },
      {
        id: 12,
        type: QuestionType.FillBlank,
        text: "It was the most beautiful photo I {{0}} (ever/see).",
        verbs: ["ever/see"],
        answers: ["had ever seen"],
        explanation: "So sánh nhất trong quá khứ ('It WAS...') -> Lùi về Quá khứ hoàn thành."
      },
      {
        id: 13,
        type: QuestionType.FillBlank,
        text: "We were very tired because we {{0}} (travel) for 12 hours.",
        verbs: ["travel"],
        answers: ["had traveled", "had been traveling"],
        explanation: "Nguyên nhân trong quá khứ (xảy ra trước 'were tired') -> QKHT hoặc QKHTTD."
      },
      {
        id: 14,
        type: QuestionType.FillBlank,
        text: "While I {{0}} (drive) to work, I {{1}} (witness) an accident.",
        verbs: ["drive", "witness"],
        answers: ["was driving", "witnessed"],
        explanation: "While + QKTD (đang lái xe), QKĐ (chứng kiến - hành động xen vào)."
      },
      {
        id: 15,
        type: QuestionType.FillBlank,
        text: "She {{0}} (turn) off the lights before she {{1}} (go) out.",
        verbs: ["turn", "go"],
        answers: ["had turned", "went"],
        explanation: "Before + QKĐ, QKHT (Hành động xảy ra trước hành động khác trong QK)."
      },
      {
        id: 16,
        type: QuestionType.FillBlank,
        text: "The house was quiet when I got home. Everybody {{0}} (go) to bed.",
        verbs: ["go"],
        answers: ["had gone"],
        explanation: "Mọi người đi ngủ TRƯỚC khi tôi về -> Quá khứ hoàn thành."
      },
      {
        id: 17,
        type: QuestionType.FillBlank,
        text: "I {{0}} (chat) with my friend when the teacher {{1}} (come) in.",
        verbs: ["chat", "come"],
        answers: ["was chatting", "came"],
        explanation: "Đang làm gì (QKTD) thì việc khác xen vào (QKĐ)."
      },
      {
        id: 18,
        type: QuestionType.FillBlank,
        text: "After he {{0}} (complete) his homework, he went to bed.",
        verbs: ["complete"],
        answers: ["had completed"],
        explanation: "After + QKHT, QKĐ."
      },
      {
        id: 19,
        type: QuestionType.FillBlank,
        text: "When we arrived at the station, the train {{0}} (already/leave).",
        verbs: ["already/leave"],
        answers: ["had already left"],
        explanation: "Tàu đi trước khi chúng tôi đến -> Quá khứ hoàn thành."
      },
      {
        id: 20,
        type: QuestionType.FillBlank,
        text: "Last summer, we {{0}} (visit) Da Nang and {{1}} (buy) many souvenirs.",
        verbs: ["visit", "buy"],
        answers: ["visited", "bought"],
        explanation: "Chuỗi hành động liên tiếp trong quá khứ -> Quá khứ đơn."
      }
    ]
  },
  {
    id: 3,
    title: 'PHẦN 3: BẪY BỊ ĐỘNG - "CHỦ NGỮ LÀ VẬT"',
    description: 'Exercise 3: Chia động từ ở thể Bị động (hoặc Chủ động nếu cần).',
    objective: 'Mục tiêu: Áp dụng công thức (A+B) + D (Be + PII). Hãy hỏi: Chủ ngữ tự làm hay bị làm?',
    questions: [
      {
        id: 21,
        type: QuestionType.FillBlank,
        text: "This bridge {{0}} (build) in 1990.",
        verbs: ["build"],
        answers: ["was built"],
        explanation: "Quá khứ đơn + Bị động (Cầu không tự xây)."
      },
      {
        id: 22,
        type: QuestionType.FillBlank,
        text: "A new supermarket {{0}} (construct) near my house right now.",
        verbs: ["construct"],
        answers: ["is being constructed"],
        explanation: "Right now (HT Tiếp diễn) + Bị động -> is being + PII."
      },
      {
        id: 23,
        type: QuestionType.FillBlank,
        text: "The letters {{0}} (must/type) before 5 PM.",
        verbs: ["must/type"],
        answers: ["must be typed"],
        explanation: "Modal verb (Must) + Bị động -> must be + PII."
      },
      {
        id: 24,
        type: QuestionType.FillBlank,
        text: "While the car {{0}} (repair), I read a magazine.",
        verbs: ["repair"],
        answers: ["was being repaired"],
        explanation: "Quá khứ tiếp diễn + Bị động (Xe đang được sửa)."
      },
      {
        id: 25,
        type: QuestionType.FillBlank,
        text: "Thousands of cars {{0}} (produce) by this factory every year.",
        verbs: ["produce"],
        answers: ["are produced"],
        explanation: "Every year (HT Đơn) + Bị động -> are + PII."
      },
      {
        id: 26,
        type: QuestionType.FillBlank,
        text: "I couldn't use my computer because it {{0}} (use) by my brother.",
        verbs: ["use"],
        answers: ["was being used"],
        explanation: "Lúc đó máy tính 'đang bị dùng' -> Quá khứ tiếp diễn bị động."
      },
      {
        id: 27,
        type: QuestionType.FillBlank,
        text: "The problem {{0}} (solve) by the time the manager arrived.",
        verbs: ["solve"],
        answers: ["had been solved"],
        explanation: "Trước QK (manager arrived) là QK Hoàn thành + Bị động -> had been + PII."
      },
      {
        id: 28,
        type: QuestionType.FillBlank,
        text: "English {{0}} (speak) all over the world.",
        verbs: ["speak"],
        answers: ["is spoken"],
        explanation: "Sự thật hiển nhiên + Bị động -> is + PII."
      },
      {
        id: 29,
        type: QuestionType.FillBlank,
        text: "Don't worry! You {{0}} (pick up) at the airport tomorrow.",
        verbs: ["pick up"],
        answers: ["will be picked up"],
        explanation: "Tomorrow (Tương lai đơn) + Bị động -> will be + PII."
      },
      {
        id: 30,
        type: QuestionType.FillBlank,
        text: "The decision {{0}} (make) yesterday.",
        verbs: ["make"],
        answers: ["was made"],
        explanation: "Yesterday (Quá khứ đơn) + Bị động -> was + PII."
      }
    ]
  },
  {
    id: 4,
    title: 'PHẦN 4: TRẮC NGHIỆM TƯ DUY (A+B+C+D)',
    description: 'Exercise 4: Chọn đáp án đúng.',
    objective: 'Mục tiêu: Chọn đáp án dựa trên công thức toán học.',
    questions: [
      {
        id: 31,
        type: QuestionType.MultipleChoice,
        text: "By next month, I ______ here for ten years.",
        options: ["A. live", "B. will live", "C. have lived", "D. will have lived"],
        correctOption: "D",
        explanation: "Công thức: By + mốc tương lai = Tương lai hoàn thành (will have PII)."
      },
      {
        id: 32,
        type: QuestionType.MultipleChoice,
        text: "The washing machine ______ right now.",
        options: ["A. is repairing", "B. is being repaired", "C. was repaired", "D. has been repaired"],
        correctOption: "B",
        explanation: "Right now (HT Tiếp diễn) + Machine (Vật/Bị động) = is being repaired."
      },
      {
        id: 33,
        type: QuestionType.MultipleChoice,
        text: "If I ______ you, I would accept the offer.",
        options: ["A. am", "B. were", "C. had been", "D. would be"],
        correctOption: "B",
        explanation: "Câu điều kiện loại 2 (trái với hiện tại): If S + were..."
      },
      {
        id: 34,
        type: QuestionType.MultipleChoice,
        text: "He asked me where I ______ the day before.",
        options: ["A. go", "B. went", "C. had gone", "D. was going"],
        correctOption: "C",
        explanation: "Câu tường thuật: 'the day before' là quá khứ của quá khứ -> Lùi thì về QK Hoàn thành."
      },
      {
        id: 35,
        type: QuestionType.MultipleChoice,
        text: "This is the first time I ______ such a delicious cake.",
        options: ["A. eat", "B. ate", "C. have eaten", "D. am eating"],
        correctOption: "C",
        explanation: "Cấu trúc: This is the first time... + Hiện tại hoàn thành."
      },
      {
        id: 36,
        type: QuestionType.MultipleChoice,
        text: "When I got to the hospital, she ______ for 30 minutes.",
        options: ["A. waited", "B. was waiting", "C. had waited", "D. had been waiting"],
        correctOption: "D",
        explanation: "Hành động xảy ra và kéo dài liên tục TRƯỚC một thời điểm trong QK -> QK Hoàn thành Tiếp diễn."
      },
      {
        id: 37,
        type: QuestionType.MultipleChoice,
        text: "Everything ______ ready by the time the guests arrive.",
        options: ["A. will be", "B. is", "C. has been", "D. was"],
        correctOption: "A",
        explanation: "By the time + hiện tại (guests arrive) -> Mệnh đề chính dùng Tương lai (Đơn hoặc Hoàn thành). Ở đây chọn A hợp lý nhất về nghĩa chuẩn bị."
      },
      {
        id: 38,
        type: QuestionType.MultipleChoice,
        text: "Look! The tree ______ by the wind.",
        options: ["A. is blowing", "B. is being blown", "C. blows", "D. blew"],
        correctOption: "B",
        explanation: "Look! (HT Tiếp diễn) + Tree (Bị động) = is being blown."
      },
      {
        id: 39,
        type: QuestionType.MultipleChoice,
        text: "I wish I ______ how to swim.",
        options: ["A. know", "B. knew", "C. have known", "D. will know"],
        correctOption: "B",
        explanation: "Câu ước ở hiện tại (Wish) -> Lùi về Quá khứ đơn."
      },
      {
        id: 40,
        type: QuestionType.MultipleChoice,
        text: "It’s high time we ______ home.",
        options: ["A. go", "B. went", "C. have gone", "D. will go"],
        correctOption: "B",
        explanation: "Cấu trúc: It's high time + S + V(ed/cột 2) - Đã đến lúc phải làm gì."
      }
    ]
  },
  {
    id: 5,
    title: 'PHẦN 5: TÌM LỖI SAI (DEBUG CÔNG THỨC)',
    description: 'Exercise 5: Tìm và sửa lỗi sai trong các câu sau.',
    objective: 'Mục tiêu: Tìm thành phần nào (A, B, hoặc D) bị lắp ghép sai. Nhập từ/cụm từ ĐÃ SỬA.',
    questions: [
      {
        id: 41,
        type: QuestionType.ErrorCorrection,
        text: "Look at the dark clouds! It will rain.",
        hint: "Dự đoán có căn cứ phải dùng công thức khác",
        answers: ["is going to rain"],
        explanation: "Dự đoán có căn cứ (mây đen) -> Dùng 'be going to', không dùng 'will'."
      },
      {
        id: 42,
        type: QuestionType.ErrorCorrection,
        text: "I have seen him three days ago.",
        hint: "Ago là dấu hiệu của A nào?",
        answers: ["saw"],
        explanation: "'Ago' là dấu hiệu của Quá khứ đơn -> Sửa 'have seen' thành 'saw'."
      },
      {
        id: 43,
        type: QuestionType.ErrorCorrection,
        text: "The house is cleaning at the moment.",
        hint: "Cái nhà có tự dọn dẹp được không?",
        answers: ["is being cleaned"],
        explanation: "Chủ ngữ là 'House' (vật) + 'at the moment' (HTTD) -> Phải dùng Bị động: is being cleaned."
      },
      {
        id: 44,
        type: QuestionType.ErrorCorrection,
        text: "When I arrived, the train has already left.",
        hint: "Sự việc xảy ra trước một việc trong quá khứ",
        answers: ["had already left", "had left"],
        explanation: "Trước quá khứ (arrived) phải là Quá khứ hoàn thành (had left)."
      },
      {
        id: 45,
        type: QuestionType.ErrorCorrection,
        text: "By the time you get back, I will finish the work.",
        hint: "Nhấn mạnh hoàn tất trước tương lai",
        answers: ["will have finished"],
        explanation: "By the time + hiện tại -> Mệnh đề chính dùng Tương lai hoàn thành (will have finished)."
      },
      {
        id: 46,
        type: QuestionType.ErrorCorrection,
        text: "She is used to wake up early in the morning.",
        hint: "Cấu trúc be used to + Ving",
        answers: ["waking up", "waking"],
        explanation: "Cấu trúc 'be used to' (quen với) + V-ing. Sửa 'wake' thành 'waking'."
      },
      {
        id: 47,
        type: QuestionType.ErrorCorrection,
        text: "I was walking down the street when I was seeing him.",
        hint: "Động từ 'see' không chia tiếp diễn",
        answers: ["saw"],
        explanation: "'See' là động từ chỉ tri giác, thường không dùng ở tiếp diễn. Hành động cắt ngang -> Quá khứ đơn."
      },
      {
        id: 48,
        type: QuestionType.ErrorCorrection,
        text: "This picture was painting by Picasso.",
        hint: "Bị động thiếu yếu tố nào?",
        answers: ["was painted"],
        explanation: "Tranh được vẽ (Bị động quá khứ) -> Be + PII (painted), không dùng V-ing."
      },
      {
        id: 49,
        type: QuestionType.ErrorCorrection,
        text: "We are waiting here for two hours.",
        hint: "Hành động kéo dài từ quá khứ đến hiện tại",
        answers: ["have been waiting", "have waited"],
        explanation: "'For two hours' -> Hiện tại hoàn thành (tiếp diễn)."
      },
      {
        id: 50,
        type: QuestionType.ErrorCorrection,
        text: "If he studies harder, he would pass the exam.",
        hint: "Câu điều kiện loại 2 - trái với hiện tại",
        answers: ["studied"],
        explanation: "Mệnh đề chính dùng 'would pass' (Loại 2) -> Mệnh đề If phải dùng Quá khứ đơn (studied)."
      }
    ]
  }
];
