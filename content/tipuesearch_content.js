var tipuesearch = {"pages": [{'title': 'About', 'text': '這是計算機程式課程 2021 Fall 的作業倉儲與網站 template \n \n 41023212 \n 網站倉儲:  https://github.com/yonqui0411/cp2021_hw \n 網站連結:\xa0 https://yonqui0411.github.io/cp2021_hw/ \n 其他與個人或作業相關資料說明或介紹: \n mdecourse所屬的實驗室: https://mde.tw', 'tags': '', 'url': 'About.html'}, {'title': 'HW1', 'text': 'HW1 - 網際動畫與 touch typing 佔學期成績 20%. \n 1.將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動 \n 1.from browser import html\n2.from browser import document as doc\n3.import browser.timer\n4.\n5.canvas = html.CANVAS(width = 400, height = 100)\n6.canvas.id = "game-board3"\n7.brython_div = doc["brython_div3"]\n8.brython_div <= canvas\n9.ctx = canvas.getContext("2d")\n10.px = 0\n11.py = 50\n12.width = 20\n13.height = 20\n14.speed = 2\n15.sp = 2\n16.\n17.def game():\n18.    global px, py, width, height, speed , sp\n19.    ctx.clearRect(px, py, width, height)\n20.    ctx.fillStyle = "red"\n21.    px += speed\n22.    if (px + width) > 200:\n23.        speed = 0\n24.        py += sp\n25.    if py < 0 or ( py + height ) > canvas.height:\n26.        sp = -sp\n27.    ctx.fillRect(px, py, width, height)\n28.    \n29.browser.timer.set_interval(game, 10) 中打 \n gist是github的一個子服務，且任何人都可以使用這個服務，不論你是否擁有github帳號。以開發者的角度來說，最基本的功能就是可以分享片段的原始碼。有別於github的repository，gist可以分享專案中的某一個小檔案中的原始碼，且擁有私人的選項，讓別人不會搜尋到你的giat。在github的repository設定private是要付費的，但在gist是不需要的。除此之外gist還有須多用處，包括可以直接執行我們就來--\n介紹吧!\n\n4.02 英打 \n Every gist is a repository,which means that it can be fork=ed and cloned.If you are sogned in to \nGitHub when you create a gist,the gist will be associater with your account and you will see it in your\nlist of gist when you navigate to your gist gome page.\n\nGist can be public or secret.Public gists show up in Discover,when people can browse new gist as\nthey\'re created. They\'re also searchable.Secret gist aren\'t private. If you send\nthe URL of a secret gist to a friend, they\'11 be able to see it.However,if someone you don\'t know\ndiscovers the URL,they11 also be able to see your gist.If you need to keep your code awar from\nprying eyes,you may want to create a ptivate repository instead.\n\nAfter creating a gist,you cannot convert it from public to secret.\n\nYou\'11 receive a notification when:\n\nYou are the author of a gist.\nSomeone mentions you im a gist.\nYou subscibe to a gist,by clicking Subscibe at the top og any gist.\n\nYou can pin gists to your profile so other people can see them easiler.For more information,see\n"Pinning iteam to your profile."\n\nYou can discover public gists others have created by the gist home page and clicking.ALL\nGist.This will take you to a page of all gists sorted and displayed by time of creation or update.You\ncan also search gists by lauguage with Gist Search.Gist search uses the same search syntax as code\nsearch.\n\nSince gists are Git repositories,you can view their full commit hisroty, complete with diffs.You can\nalso frok or clone gists.For more information,see "Forking and cloneing gists".\n\nYou can download a ZIP file of  a gist by clicking the Download ZIP button at the top of the gist.You\ncan embed a gist in any text filed that supports Javascript,such as a blog post.To get the embed\ncode,click the clipboard icon next to the Embed URL of a gist.To embed a sepcific gist file,append\nthe Embed URL with ?file=FILENAME.\n\nGist supports mapping GeoJSON files.These maps are displayed in embedded gist,so you can easily\nshare and embed maps.For more information,see"Working with non-code files."\n\n28min57.88s', 'tags': '', 'url': 'HW1.html'}, {'title': 'red', 'text': 'w12demo.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag red \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n', 'tags': '', 'url': 'red.html'}, {'title': 'HW2', 'text': 'HW2 - 可攜程式系統與個人網站佔學期成績 20%. \n HW2 必須在 2021.11.03 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.10.25 開啟, 於  2021.11.03 22:00 關閉 \n 可攜程式系統與 Python 範例程式收集整理 \n 1. 請準備一個至少 64 GB 大小的 USB 3.0 以上隨身碟 (或外接 SSD), 根據  Task2  中的說明, 建立自己的可攜程式系統.\xa0 \n 2. 請登入 Github 帳號後, 連線至  https://github.com/mdecourse/cp2021_hw  後, 透過  Use this template  按鈕建立自己的 cp2021_hw 倉儲. 並至該倉儲的 Settings -> Pages -> Source 將 main 分支設為 Github Pages 的 root (也就是選擇將倉儲的 main 分支設為對應網站的根目錄). \n 3. 請將 HW1 與 HW2 的作業內容登錄至個人的 cp2021_hw 倉儲與網站中. (學習如何透過 git 指令修改倉儲中的版本內容) \n 4. 請在個人作業網站的 HW2 區域下增設一個 H2 頁面, 將該網頁標題命名為 run, 可以如  run  頁面中的內容, 並且利用此頁面收集 Python 範例程式. (例如: 可自動執行的貪食蛇:  https://mde.tw/cp2021/content/run.html?src=https://gist.githubusercontent.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439/raw/2160a12b9fec9707a120a383ed5d38b9b78a02cf/snake.py  將  https://gist.github.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439  作為  https://mde.tw/cp2021/content/run.html  頁面中 src 變數的值, 就可以在頁面中導入程式碼並執行) \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'run', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'run.html'}, {'title': 'test', 'text': 'ssh \n', 'tags': '', 'url': 'test.html'}, {'title': 'HW3', 'text': '\n HW3 - AI 貪食蛇佔學期成績 30%. \n HW3 必須在 2021.12.22 22:00 之前完成. \n HW3 具體項目成果回報區 將於 2021.11.09 開啟, 於  2021.12.22 22:00 關閉 \n 網際貪食蛇的逆襲, 誰的 自動執行貪食蛇 能夠破紀錄? 目前直覺貪食蛇紀錄為 45 節 (除了蛇身節數外, 應該還要置入出現紅色標的物後的總完食時間). \n 手動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式的改進. \n 參考資料: \n https://mde.tw/cp2021/content/Task3.html \n Brython snake 原始來源:  https://medium.com/swlh/sick-of-javascript-just-use-browser-python-4b9679efe08b \n https://github.com/mdecourse/snake-Q-Learning \n https://towardsdatascience.com/teaching-a-computer-how-to-play-snake-with-q-learning-93d0a316ddc0 \n https://github.com/mdecourse/SnakeQlearning \n https://medium.com/@italohdc/learnsnake-teaching-an-ai-to-play-snake-using-reinforcement-learning-q-learning-b63ac23dfdd1 \n https://towardsdatascience.com/snake-played-by-a-deep-reinforcement-learning-agent-53f2c4331d36 \n https://www.geeksforgeeks.org/ai-driven-snake-game-using-deep-q-learning/ \n https://www3.hs-albsig.de/wordpress/point2pointmotion/2020/10/09/deep-reinforcement-learning-with-the-snake-game/ \n 2016_Exploration of Reinforcement Learning to SNAKE.pdf \n train_a_snake_with_reinforceme.pdf \n https://medium.com/@hugo.sjoberg88/using-reinforcement-learning-and-q-learning-to-play-snake-28423dd49e9b \n https://github.com/mdecourse/Snake-Reinforcement-Learning \n Autonomous-Agents-in-Snake-Game-via-Deep-Reinforcement-Learning.pdf \n 延伸應用: \n \n \n \n \n https://github.com/mdecourse/snake-ai-pytorch \n \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Exam', 'text': '', 'tags': '', 'url': 'Exam.html'}, {'title': 'w13', 'text': '使用 random 模組, 以隨機方式列出六行文字 \n \n \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n random random2 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 30% \n Final Project 必須在 2022.01.05 22:00 之前完成 . \n Final Project 具體項目成果回報區 將於 2021.11.09 開啟, 於  2022.01.05 22:00 關閉 \n 利用 Brython 寫一個會 令人想玩 的網際遊戲. \n 參考章節: \n \n 專題摘要 \n 資料蒐集 \n 設計動機 \n 設計方法 \n 結果與討論 \n 附錄 \n \n 參考資料: \n https://github.com/collections/web-games \n https://github.com/topics/web-game \n https://github.com/topics/browser-game \n https://github.com/leereilly/games \n https://bmsleight.github.io/brython-blocks/ \n https://github.com/mdecourse/brython-blocks \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'Final Project.html'}]};