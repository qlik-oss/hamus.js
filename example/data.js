
const script = `Tarantino:
  LOAD * INLINE [
    movie,type,word,minutes_in
    Reservoir Dogs,word,aaaa,0.40
    Reservoir Dogs,word,aaaas,0.43
    Reservoir Dogs,word,bee,0.55
    Reservoir Dogs,word,loving,0.61
    Reservoir Dogs,word,bbbb,0.61
    Reservoir Dogs,word,cow,0.66
    Reservoir Dogs,word,mouse,0.90
    Reservoir Dogs,word,cow,1.43
    Reservoir Dogs,word,aaaas,1.56
    Reservoir Dogs,word,cow,1.66
    Reservoir Dogs,word,aaaa,1.75
    Reservoir Dogs,word,aaaa,1.75
    Reservoir Dogs,word,aaaa,1.75
    Reservoir Dogs,word,aaaa,1.75
    Reservoir Dogs,word,aaaa,1.75
    Reservoir Dogs,word,aaaa,1.75
    Reservoir Dogs,word,aaaa,1.75
    Reservoir Dogs,word,aaaas,1.75
    Reservoir Dogs,word,please,1.83
    Reservoir Dogs,word,aaaa,1.96
    Reservoir Dogs,word,hand,2.15
    Reservoir Dogs,word,cows,2.18
    Reservoir Dogs,word,cow,2.30
    Reservoir Dogs,word,loving,2.45
    Reservoir Dogs,word,heaven,2.48
    Reservoir Dogs,word,loving,2.51
    Reservoir Dogs,word,loving,2.81
    Reservoir Dogs,word,aaaa,2.86
    Reservoir Dogs,word,yes,2.93
    Reservoir Dogs,word,cow,3.05
    Reservoir Dogs,word,mouse,3.20
    Reservoir Dogs,word,loving,3.40
    Reservoir Dogs,word,loving,3.55
    Reservoir Dogs,word,loving,3.70
    Reservoir Dogs,word,please,3.93
    Reservoir Dogs,word,please,3.98
    Reservoir Dogs,word,mouse,4.35
    Reservoir Dogs,word,mouse,4.76
    Reservoir Dogs,word,loving,4.86
    Reservoir Dogs,word,aaaa,5.25
    Reservoir Dogs,word,loving,5.41
    Reservoir Dogs,word,loving,5.51
    Reservoir Dogs,word,loving,5.55
    Reservoir Dogs,word,loving,5.61
    Reservoir Dogs,word,bbbb,6.23
    Reservoir Dogs,word,cow,6.46
    Reservoir Dogs,word,bee,6.58
    Reservoir Dogs,word,cows,6.66
    Reservoir Dogs,word,bbbb,6.81
    Reservoir Dogs,word,loving,6.86
    Reservoir Dogs,word,loving,6.73
    Reservoir Dogs,word,honey,7.38
    Reservoir Dogs,word,nice,7.41
    Reservoir Dogs,word,nice,7.58
    Reservoir Dogs,word,mouse,9.63
    Reservoir Dogs,word,loving,9.96
    Reservoir Dogs,word,mouse,10.01
    Reservoir Dogs,word,loving,10.08
    Reservoir Dogs,word,mouse,10.26
    Reservoir Dogs,word,nice,11.13
    Reservoir Dogs,word,loving,11.13
    Reservoir Dogs,word,loving,11.85
    Reservoir Dogs,word,loving,12.06
    Reservoir Dogs,word,loving,12.08
    Reservoir Dogs,word,loving,12.43
    Reservoir Dogs,word,loving,12.45
    Reservoir Dogs,word,loving,12.90
    Reservoir Dogs,word,loving,13.73
    Reservoir Dogs,word,cow,14.38
    Reservoir Dogs,word,loving,14.66
    Reservoir Dogs,word,loving,14.95
    Reservoir Dogs,word,loving,15.38
    Reservoir Dogs,word,loving,15.41
    Reservoir Dogs,word,mouse,15.45
    Reservoir Dogs,word,cow,15.51
    Reservoir Dogs,word,cow,15.65
    Reservoir Dogs,word,loving,15.75
    Reservoir Dogs,word,bee,15.86
    Reservoir Dogs,word,bee,15.88
    Reservoir Dogs,word,bee,15.93
    Reservoir Dogs,word,cow,16.45
    Reservoir Dogs,word,pleases,16.60
    Reservoir Dogs,word,loving,16.65
    Reservoir Dogs,word,cow,16.75
    Reservoir Dogs,word,loving,16.86
    Reservoir Dogs,word,loving,17.56
    Reservoir Dogs,word,cow,17.63
    Reservoir Dogs,word,loving,17.75
    Reservoir Dogs,word,loving,17.95
    Reservoir Dogs,word,loving,18.00
    Reservoir Dogs,word,mouse,20.13
    Reservoir Dogs,word,loving,20.16
    Reservoir Dogs,word,cow,20.68
    Reservoir Dogs,word,cow,20.73
    Reservoir Dogs,word,cow,20.93
    Reservoir Dogs,word,loving,20.96
    Reservoir Dogs,word,baby,20.98
    Reservoir Dogs,word,cow,21.00
    Reservoir Dogs,word,loving,21.01
    Reservoir Dogs,word,cow,21.20
    Reservoir Dogs,word,loving,22.18
    Reservoir Dogs,word,cow,22.21
    Reservoir Dogs,word,please,22.46
    Reservoir Dogs,word,cow,22.60
    Reservoir Dogs,word,nice,22.71
    Reservoir Dogs,word,sun,22.80
    Reservoir Dogs,word,cow,23.00
    Reservoir Dogs,word,loving,23.20
    Reservoir Dogs,word,babys,23.35
    Reservoir Dogs,word,loving,24.01
    Reservoir Dogs,word,cow,24.05
    Reservoir Dogs,word,loving,24.60
    Reservoir Dogs,word,cow,24.66
    Reservoir Dogs,word,loving,24.76
    Reservoir Dogs,word,loving,25.13
    Reservoir Dogs,word,mouse,25.35
    Reservoir Dogs,word,cow,25.45
    Reservoir Dogs,word,loving,25.75
    Reservoir Dogs,word,bbbb,25.76
    Reservoir Dogs,word,loving,26.01
    Reservoir Dogs,word,loving,26.06
    Reservoir Dogs,word,loving,26.16
    Reservoir Dogs,word,loving,26.26
    Reservoir Dogs,word,heaven,27.21
    Reservoir Dogs,word,mouse,28.60
    Reservoir Dogs,word,loving,28.60
    Reservoir Dogs,word,loving,28.83
    Reservoir Dogs,word,mouse,28.83
    Reservoir Dogs,word,mouse,29.16
    Reservoir Dogs,word,heaven,29.18
    Reservoir Dogs,word,loving,31.13
    Reservoir Dogs,word,cow,31.50
    Reservoir Dogs,word,loving,31.60
    Reservoir Dogs,word,cow,31.80
    Reservoir Dogs,word,cow,31.81
    Reservoir Dogs,word,loving,31.88
    Reservoir Dogs,word,heaven,32.11
    Reservoir Dogs,word,loving,32.43
    Reservoir Dogs,word,cow,32.55
    Reservoir Dogs,word,loving,32.58
    Reservoir Dogs,word,mouse,32.60
    Reservoir Dogs,word,cow,32.63
    Reservoir Dogs,word,loving,32.70
    Reservoir Dogs,word,mouse,32.91
    Reservoir Dogs,word,baby,33.76
    Reservoir Dogs,word,mouse,33.81
    Reservoir Dogs,word,loving,33.90
    Reservoir Dogs,word,loving,34.30
    Reservoir Dogs,word,cow,34.38
    Reservoir Dogs,word,loving,34.46
    Reservoir Dogs,word,loving,34.56
    Reservoir Dogs,word,loving,34.60
    Reservoir Dogs,word,cow,34.71
    Reservoir Dogs,word,loving,34.75
    Reservoir Dogs,word,cow,34.85
    Reservoir Dogs,word,baby,34.98
    Reservoir Dogs,word,babys,35.48
    Reservoir Dogs,word,cow,35.50
    Reservoir Dogs,word,loving,35.60
    Reservoir Dogs,word,loving,35.61
    Reservoir Dogs,word,n-word ,35.61
    Reservoir Dogs,word,n-word ,35.63
    Reservoir Dogs,word,loving,35.71
    Reservoir Dogs,word,loving,35.83
    Reservoir Dogs,word,cow,35.88
    Reservoir Dogs,word,sunes,35.95
    Reservoir Dogs,word,cow,36.01
    Reservoir Dogs,word,mouse,36.06
    Reservoir Dogs,word,loving,36.11
    Reservoir Dogs,word,cow,37.41
    Reservoir Dogs,word,loving,37.48
    Reservoir Dogs,word,cow,37.91
    Reservoir Dogs,word,loving,39.06
    Reservoir Dogs,word,baby,39.06
    Reservoir Dogs,word,loving,39.18
    Reservoir Dogs,word,heaven,39.46
    Reservoir Dogs,word,heaven,39.60
    Reservoir Dogs,word,hello,39.88
    Reservoir Dogs,word,loving,40.13
    Reservoir Dogs,word,sun,40.15
    Reservoir Dogs,word,sun,40.30
    Reservoir Dogs,word,cowup,40.48
    Reservoir Dogs,word,mouse,40.96
    Reservoir Dogs,word,cow,41.25
    Reservoir Dogs,word,honey,41.30
    Reservoir Dogs,word,cow,41.31
    Reservoir Dogs,word,cow,41.43
    Reservoir Dogs,word,loving,41.75
    Reservoir Dogs,word,sun,41.76
    Reservoir Dogs,word,hello,41.85
    Reservoir Dogs,word,loving,41.93
    Reservoir Dogs,word,n-word ,41.93
    Reservoir Dogs,word,sun,42.00
    Reservoir Dogs,word,loving,42.03
    Reservoir Dogs,word,hello,42.11
    Reservoir Dogs,word,hello,42.13
    Reservoir Dogs,word,mouse,42.16
    Reservoir Dogs,word,cow,42.55
    Reservoir Dogs,word,please,42.56
    Reservoir Dogs,word,cower,42.60
    Reservoir Dogs,word,mousety,42.66
    Reservoir Dogs,word,sunhead,42.86
    Reservoir Dogs,word,loving,43.06
    Reservoir Dogs,word,loving,43.31
    Reservoir Dogs,word,mouse,43.35
    Reservoir Dogs,word,cow,42.70
    Reservoir Dogs,word,cow,42.71
    Reservoir Dogs,word,mouse,43.86
    Reservoir Dogs,word,loving,44.00
    Reservoir Dogs,word,mouse,44.03
    Reservoir Dogs,word,bee,44.65
    Reservoir Dogs,word,cow,44.90
    Reservoir Dogs,word,loving,45.26
    Reservoir Dogs,word,ouch,45.40
    Reservoir Dogs,word,loving,46.48
    Reservoir Dogs,word,cow,46.53
    Reservoir Dogs,word,loving,46.65
    Reservoir Dogs,word,loving,46.66
    Reservoir Dogs,word,cow,47.50
    Reservoir Dogs,word,loving,47.51
    Reservoir Dogs,word,loving,47.55
    Reservoir Dogs,word,loving,47.70
    Reservoir Dogs,word,loving,47.71
    Reservoir Dogs,word,loving,47.73
    Reservoir Dogs,word,loving,47.75
    Reservoir Dogs,word,loving,47.80
    Reservoir Dogs,word,loving,47.88
    Reservoir Dogs,word,mouse,47.98
    Reservoir Dogs,word,loving,48.08
    Reservoir Dogs,word,bbbb,48.15
    Reservoir Dogs,word,cow,48.16
    Reservoir Dogs,word,loving,48.25
    Reservoir Dogs,word,loving,48.26
    Reservoir Dogs,word,heaven,48.31
    Reservoir Dogs,word,loving,48.38
    Reservoir Dogs,word,loving,48.48
    Reservoir Dogs,word,babys,48.48
    Reservoir Dogs,word,baby,48.51
    Reservoir Dogs,word,loving,48.55
    Reservoir Dogs,word,loving,48.56
    Reservoir Dogs,word,loving,48.58
    Reservoir Dogs,word,loving,48.61
    Reservoir Dogs,word,loving,48.78
    Reservoir Dogs,word,loving,48.98
    Reservoir Dogs,word,loving,49.06
    Reservoir Dogs,word,loving,49.15
    Reservoir Dogs,word,honey,49.61
    Reservoir Dogs,word,cow,49.68
    Reservoir Dogs,word,loving,49.70
    Reservoir Dogs,word,nice,49.75
    Reservoir Dogs,word,loving,49.80
    Reservoir Dogs,word,loving,49.90
    Reservoir Dogs,word,loving,49.98
    Reservoir Dogs,word,loving,50.51
    Reservoir Dogs,word,honey,50.68
    Reservoir Dogs,word,loving,50.76
    Reservoir Dogs,word,please,50.91
    Reservoir Dogs,word,loving,51.08
    Reservoir Dogs,word,loving,51.36
    Reservoir Dogs,word,loving,51.51
    Reservoir Dogs,word,cow,51.88
    Reservoir Dogs,word,loving,51.98
    Reservoir Dogs,word,loving,53.28
    Reservoir Dogs,word,mouse,53.43
    Reservoir Dogs,word,hello,53.93
    Reservoir Dogs,word,bbbb,54.25
    Reservoir Dogs,word,cow,54.30
    Reservoir Dogs,word,cow,56.73
    Reservoir Dogs,death,,59.93
    Reservoir Dogs,word,mouse,61.00
    Reservoir Dogs,word,mouse,62.15
    Reservoir Dogs,word,cow,62.28
    Reservoir Dogs,word,cow,62.83
    Reservoir Dogs,word,cow,62.91
    Reservoir Dogs,word,loving,62.95
    Reservoir Dogs,word,honey,62.95
    Reservoir Dogs,word,cow,63.15
    Reservoir Dogs,word,loving,63.21
    Reservoir Dogs,word,loving,63.26
    Reservoir Dogs,word,loving,63.30
    Reservoir Dogs,word,cow,63.33
    Reservoir Dogs,word,cow,63.35
    Reservoir Dogs,word,loving,63.38
    Reservoir Dogs,word,loving,62.41
    Reservoir Dogs,word,hand,63.81
    Reservoir Dogs,word,loving,63.91
    Reservoir Dogs,word,please,64.31
    Reservoir Dogs,word,sun,64.46
    Reservoir Dogs,word,nice,64.75
    Reservoir Dogs,word,loving,64.76
    Reservoir Dogs,word,please,65.15
    Reservoir Dogs,word,sun,65.65
    Reservoir Dogs,word,ouched,65.73
    Reservoir Dogs,word,please,65.76
    Reservoir Dogs,word,sun,65.76
    Reservoir Dogs,word,loving,66.05
    Reservoir Dogs,word,loving,66.35
    Reservoir Dogs,word,loving,66.36
    Reservoir Dogs,word,loving,66.46
    Reservoir Dogs,word,loving,66.50
    Reservoir Dogs,word,sun,66.50
    Reservoir Dogs,word,heaven,66.96
    Reservoir Dogs,word,bbbb,67.03
    Reservoir Dogs,word,loving,67.21
    Reservoir Dogs,word,loving,67.28
    Reservoir Dogs,word,mouse,67.30
    Reservoir Dogs,word,loving,67.48
    Reservoir Dogs,word,mouse,67.88
    Reservoir Dogs,word,please,68.01
    Reservoir Dogs,word,loving,68.66
    Reservoir Dogs,word,loving,69.25
    Reservoir Dogs,word,cow,69.28
    Reservoir Dogs,word,mouse,69.30
    Reservoir Dogs,word,hello,69.31
    Reservoir Dogs,word,mouse,69.35
    Reservoir Dogs,word,sun,69.46
    Reservoir Dogs,word,loving,69.48
    Reservoir Dogs,word,loving,69.51
    Reservoir Dogs,word,loving,69.53
    Reservoir Dogs,word,please,69.61
    Reservoir Dogs,word,mouse,69.78
    Reservoir Dogs,word,loving,69.86
    Reservoir Dogs,word,sun,69.88
    Reservoir Dogs,word,loving,70.06
    Reservoir Dogs,word,loving,71.63
    Reservoir Dogs,word,cow,71.95
    Reservoir Dogs,word,loving,72.16
    Reservoir Dogs,word,loving,72.40
    Reservoir Dogs,word,baby,72.58
    Reservoir Dogs,word,loving,72.61
    Reservoir Dogs,word,loving,72.95
    Reservoir Dogs,word,hello,73.05
    Reservoir Dogs,word,loving,73.28
    Reservoir Dogs,word,loving,73.36
    Reservoir Dogs,word,mouse,74.01
    Reservoir Dogs,word,mouse,74.05
    Reservoir Dogs,word,hello,74.40
    Reservoir Dogs,word,mouse,74.43
    Reservoir Dogs,word,please,74.50
    Reservoir Dogs,word,hand,76.13
    Reservoir Dogs,word,mouse,76.20
    Reservoir Dogs,word,loving,76.28
    Reservoir Dogs,word,loving,76.30
    Reservoir Dogs,word,hello,77.05
    Reservoir Dogs,word,hello,77.06
    Reservoir Dogs,word,cow,77.13
    Reservoir Dogs,word,n-word ,77.25
    Reservoir Dogs,word,mouse,77.28
    Reservoir Dogs,word,n-word ,77.33
    Reservoir Dogs,word,sun,77.35
    Reservoir Dogs,word,helloes,77.36
    Reservoir Dogs,word,cow,77.40
    Reservoir Dogs,word,loving,78.01
    Reservoir Dogs,word,cow,78.55
    Reservoir Dogs,word,loving,78.60
    Reservoir Dogs,word,wetback,78.95
    Reservoir Dogs,word,mouse,79.10
    Reservoir Dogs,word,loving,79.11
    Reservoir Dogs,word,mouse,79.36
    Reservoir Dogs,word,loving,79.40
    Reservoir Dogs,word,aaaa,79.48
    Reservoir Dogs,word,aaaa,79.51
    Reservoir Dogs,word,loving,79.83
    Reservoir Dogs,word,cow,80.18
    Reservoir Dogs,word,bbbb,80.31
    Reservoir Dogs,word,loving,80.46
    Reservoir Dogs,word,heaven,80.65
    Reservoir Dogs,word,dog,81.65
    Reservoir Dogs,word,mouse,82.05
    Reservoir Dogs,word,hand,82.08
    Reservoir Dogs,word,nice,82.48
    Reservoir Dogs,word,loving,82.50
    Reservoir Dogs,word,loving,82.73
    Reservoir Dogs,word,nice,82.90
    Reservoir Dogs,word,nice,82.96
    Reservoir Dogs,word,sun,83.86
    Reservoir Dogs,word,loving,84.16
    Reservoir Dogs,word,mouse,84.16
    Reservoir Dogs,word,hello,84.21
    Reservoir Dogs,word,cow,84.30
    Reservoir Dogs,word,cow,84.40
    Reservoir Dogs,word,hello,84.50
    Reservoir Dogs,word,cow,85.08
    Reservoir Dogs,word,cow,85.28
    Reservoir Dogs,word,loving,85.45
    Reservoir Dogs,death,,85.58
    Reservoir Dogs,death,,85.58
    Reservoir Dogs,death,,85.81
    Reservoir Dogs,word,loving,86.48
    Reservoir Dogs,death,,86.55
    Reservoir Dogs,word,loving,86.86
    Reservoir Dogs,word,mouse,86.91
    Reservoir Dogs,word,loving,86.96
    Reservoir Dogs,word,mouse,87.06
    Reservoir Dogs,word,cow,87.73
    Reservoir Dogs,death,,88.06
    Reservoir Dogs,word,heaven,88.38
    Reservoir Dogs,word,mouse,88.45
    Reservoir Dogs,word,loving,88.76
    Reservoir Dogs,word,loving,89.38
    Reservoir Dogs,word,loving,89.45
    Reservoir Dogs,word,loving,89.48
    Reservoir Dogs,word,loving,89.95
    Reservoir Dogs,word,heaven,90.10
    Reservoir Dogs,word,bbbb,90.15
    Reservoir Dogs,word,heaven,90.30
    Reservoir Dogs,word,cow,90.36
    Reservoir Dogs,word,mouse,90.40
    Reservoir Dogs,word,loving,90.50
    Reservoir Dogs,word,loving,90.75
    Reservoir Dogs,word,mouse,90.88
    Reservoir Dogs,word,cocksucker,90.91
    Reservoir Dogs,word,loving,91.15
    Reservoir Dogs,word,loving,91.35
    Reservoir Dogs,word,loving,91.48
    Reservoir Dogs,word,loving,91.75
    Reservoir Dogs,word,loving,91.96
    Reservoir Dogs,word,loving,92.01
    Reservoir Dogs,word,nice,92.05
    Reservoir Dogs,word,loving,92.13
    Reservoir Dogs,death,,92.15
    Reservoir Dogs,death,,92.15
    Reservoir Dogs,word,loving,94.73
    Reservoir Dogs,word,loving,94.75
    Reservoir Dogs,word,loving,94.83
    Reservoir Dogs,word,loving,94.90
    Reservoir Dogs,word,loving,95.21
    Reservoir Dogs,word,loving,95.33
    Reservoir Dogs,word,loving,95.33
    Reservoir Dogs,death,,95.40
    Reservoir Dogs,death,,95.40
    Pulp Fiction,word,mouse,0.52
    Pulp Fiction,word,loving,0.82
    Pulp Fiction,word,cow,1.37
    Pulp Fiction,word,loving,1.62
    Pulp Fiction,word,loving,1.73
    Pulp Fiction,word,loving,1.77
    Pulp Fiction,word,loving,2.18
    Pulp Fiction,word,cow,2.22
    Pulp Fiction,word,gook,2.28
    Pulp Fiction,word,cowers,2.28
    Pulp Fiction,word,gooks,2.42
    Pulp Fiction,word,loving,2.45
    Pulp Fiction,word,loving,2.47
    Pulp Fiction,word,loving,2.53
    Pulp Fiction,word,cow,2.60
    Pulp Fiction,word,cow,3.52
    Pulp Fiction,word,loving,3.58
    Pulp Fiction,word,wetback,3.67
    Pulp Fiction,word,cow,3.70
    Pulp Fiction,word,loving,4.68
    Pulp Fiction,word,heavenly,4.75
    Pulp Fiction,word,loving,7.70
    Pulp Fiction,word,mouse,7.87
    Pulp Fiction,word,cow,8.25
    Pulp Fiction,word,nice,8.67
    Pulp Fiction,word,loving,8.72
    Pulp Fiction,word,mouse,8.72
    Pulp Fiction,word,loving,9.10
    Pulp Fiction,word,n-word ,10.08
    Pulp Fiction,word,bee,10.17
    Pulp Fiction,word,cow,10.40
    Pulp Fiction,word,sun,10.73
    Pulp Fiction,word,n-word ,10.75
    Pulp Fiction,word,n-word ,10.85
    Pulp Fiction,word,ouch,10.98
    Pulp Fiction,word,hand,11.52
    Pulp Fiction,word,loving,11.55
    Pulp Fiction,word,hello,11.60
    Pulp Fiction,word,hello,11.60
    Pulp Fiction,word,loving,11.63
    Pulp Fiction,word,loving,11.68
    Pulp Fiction,word,loving,11.83
    Pulp Fiction,word,loving,11.88
    Pulp Fiction,word,mouse,11.92
    Pulp Fiction,word,loving,12.03
    Pulp Fiction,word,mouse,12.07
    Pulp Fiction,word,cow,12.20
    Pulp Fiction,word,cow,12.27
    Pulp Fiction,word,heavenly,12.88
    Pulp Fiction,word,loving,12.90
    Pulp Fiction,word,n-word ,12.92
    Pulp Fiction,word,mouse,12.93
    Pulp Fiction,word,please,12.95
    Pulp Fiction,word,mouse,12.97
    Pulp Fiction,word,sun,12.98
    Pulp Fiction,word,please,13.00
    Pulp Fiction,word,loving,13.23
    Pulp Fiction,word,loving,13.33
    Pulp Fiction,word,loving,13.38
    Pulp Fiction,word,loving,13.43
    Pulp Fiction,word,mouse,13.47
    Pulp Fiction,word,please,16.78
    Pulp Fiction,word,mouse,17.40
    Pulp Fiction,word,nice,17.45
    Pulp Fiction,word,sun,18.38
    Pulp Fiction,word,mouse,18.40
    Pulp Fiction,word,bee,18.62
    Pulp Fiction,death,,18.70
    Pulp Fiction,word,please,19.33
    Pulp Fiction,word,please,19.57
    Pulp Fiction,word,nice,19.58
    Pulp Fiction,word,hello,19.70
    Pulp Fiction,word,hello,19.82
    Pulp Fiction,word,cow,19.85
    Pulp Fiction,word,hello,19.85
    Pulp Fiction,word,cow,19.95
    Pulp Fiction,word,bee,20.00
    Pulp Fiction,death,,20.95
    Pulp Fiction,word,mouse,21.32
    Pulp Fiction,word,please,21.42
    Pulp Fiction,word,heavenly,21.82
    Pulp Fiction,word,sun,21.88
    Pulp Fiction,word,pleases,22.03
    Pulp Fiction,word,pleases,22.08
    Pulp Fiction,word,sun,22.10
    Pulp Fiction,word,n-word ,23.07
    Pulp Fiction,word,loving,23.47
    Pulp Fiction,word,cow,23.52
    Pulp Fiction,word,mouse,23.70
    Pulp Fiction,word,sun,24.07
    Pulp Fiction,word,sun,24.23
    Pulp Fiction,word,sunes,24.40
    Pulp Fiction,word,nice,24.45
    Pulp Fiction,word,n-word ,24.45
    Pulp Fiction,word,loving,25.08
    Pulp Fiction,word,nice,25.12
    Pulp Fiction,word,loving,25.17
    Pulp Fiction,word,loving,25.28
    Pulp Fiction,word,mouse,25.33
    Pulp Fiction,word,loving,25.37
    Pulp Fiction,word,baby,25.42
    Pulp Fiction,word,n-word ,25.88
    Pulp Fiction,word,sun,25.92
    Pulp Fiction,word,mouse,27.75
    Pulp Fiction,word,loving,27.78
    Pulp Fiction,word,n-word ,27.88
    Pulp Fiction,word,mouse,27.98
    Pulp Fiction,word,mouse,27.98
    Pulp Fiction,word,mouse,28.03
    Pulp Fiction,word,mouse,28.08
    Pulp Fiction,word,loving,28.10
    Pulp Fiction,word,loving,28.22
    Pulp Fiction,word,loving,28.30
    Pulp Fiction,word,mouse,28.98
    Pulp Fiction,word,cower,29.43
    Pulp Fiction,word,loving,29.47
    Pulp Fiction,word,bee,29.52
    Pulp Fiction,word,aaaaless,29.63
    Pulp Fiction,word,mouse,29.65
    Pulp Fiction,word,bee,29.67
    Pulp Fiction,word,loving,29.68
    Pulp Fiction,word,baby,29.82
    Pulp Fiction,word,cower,29.88
    Pulp Fiction,word,chickenmouse,29.92
    Pulp Fiction,word,loving,29.92
    Pulp Fiction,word,cow,29.97
    Pulp Fiction,word,cow,34.25
    Pulp Fiction,word,heaven,37.02
    Pulp Fiction,word,heaven,37.03
    Pulp Fiction,word,nice,41.05
    Pulp Fiction,word,loving,41.05
    Pulp Fiction,word,loving,41.12
    Pulp Fiction,word,bbbb,41.90
    Pulp Fiction,word,cow,42.10
    Pulp Fiction,word,nice,42.98
    Pulp Fiction,word,nice,43.00
    Pulp Fiction,word,nice,43.03
    Pulp Fiction,word,loving,54.58
    Pulp Fiction,word,cow,54.63
    Pulp Fiction,word,cow,54.67
    Pulp Fiction,word,cow,54.68
    Pulp Fiction,word,loving,54.97
    Pulp Fiction,word,cow,55.00
    Pulp Fiction,word,cow,55.48
    Pulp Fiction,word,nice,55.75
    Pulp Fiction,word,loving,55.83
    Pulp Fiction,word,babys,55.83
    Pulp Fiction,word,loving,55.93
    Pulp Fiction,word,baby,55.93
    Pulp Fiction,word,loving,56.10
    Pulp Fiction,word,loving,56.22
    Pulp Fiction,word,loving,56.28
    Pulp Fiction,word,bee,56.32
    Pulp Fiction,word,loving,56.38
    Pulp Fiction,word,loving,56.45
    Pulp Fiction,word,loving,56.53
    Pulp Fiction,word,bee,56.55
    Pulp Fiction,word,loving,56.55
    Pulp Fiction,word,heaven,56.92
    Pulp Fiction,word,loving,56.98
    Pulp Fiction,word,mouse,57.02
    Pulp Fiction,word,cow,57.03
    Pulp Fiction,word,loving,57.05
    Pulp Fiction,word,bee,57.12
    Pulp Fiction,word,hello,57.12
    Pulp Fiction,word,bee,57.17
    Pulp Fiction,word,hello,57.18
    Pulp Fiction,word,loving,57.25
    Pulp Fiction,word,loving,57.38
    Pulp Fiction,word,mouse,57.45
    Pulp Fiction,word,mouse,57.57
    Pulp Fiction,word,nice,57.62
    Pulp Fiction,word,cow,57.63
    Pulp Fiction,word,heaven,57.82
    Pulp Fiction,word,loving,57.85
    Pulp Fiction,word,cow,57.85
    Pulp Fiction,word,cow,57.87
    Pulp Fiction,word,loving,57.88
    Pulp Fiction,word,hello,57.90
    Pulp Fiction,word,cow,57.98
    Pulp Fiction,word,loving,58.15
    Pulp Fiction,word,loving,58.48
    Pulp Fiction,word,cow,58.87
    Pulp Fiction,word,loving,58.88
    Pulp Fiction,word,loving,59.05
    Pulp Fiction,word,loving,59.27
    Pulp Fiction,word,cow,59.32
    Pulp Fiction,word,hello,59.65
    Pulp Fiction,word,loving,59.97
    Pulp Fiction,word,loving,60.15
    Pulp Fiction,word,loving,60.93
    Pulp Fiction,word,heaven,64.47
    Pulp Fiction,word,gooks,67.33
    Pulp Fiction,word,ouched,67.50
    Pulp Fiction,word,slope,67.50
    Pulp Fiction,word,sun,67.60
    Pulp Fiction,word,sun,67.67
    Pulp Fiction,word,sun,67.78
    Pulp Fiction,word,sun,70.30
    Pulp Fiction,word,sun,70.38
    Pulp Fiction,word,nice,70.40
    Pulp Fiction,word,please,70.50
    Pulp Fiction,word,n-word ,70.55
    Pulp Fiction,word,sun,70.60
    Pulp Fiction,word,mouse,72.98
    Pulp Fiction,word,cow,73.78
    Pulp Fiction,word,cow,73.92
    Pulp Fiction,word,loving,74.02
    Pulp Fiction,word,cow,74.12
    Pulp Fiction,word,cow,74.45
    Pulp Fiction,word,nice,74.72
    Pulp Fiction,word,ouch,77.47
    Pulp Fiction,word,cowhead,80.70
    Pulp Fiction,word,thanks,82.75
    Pulp Fiction,word,loving,84.95
    Pulp Fiction,word,cow,84.95
    Pulp Fiction,word,cow,85.28
    Pulp Fiction,word,loving,85.42
    Pulp Fiction,word,mouse,85.58
    Pulp Fiction,word,loving,85.65
    Pulp Fiction,word,cow,85.78
    Pulp Fiction,word,cow,86.03
    Pulp Fiction,word,cow,86.03
    Pulp Fiction,word,cow,86.05
    Pulp Fiction,word,please,86.07
    Pulp Fiction,word,cow,86.10
    Pulp Fiction,word,loving,86.15
    Pulp Fiction,word,loving,86.15
    Pulp Fiction,word,cow,86.80
    Pulp Fiction,word,mouse,88.03
    Pulp Fiction,word,loving,88.05
    Pulp Fiction,word,loving,88.07
    Pulp Fiction,death,,91.75
    Pulp Fiction,word,please,94.70
    Pulp Fiction,word,ouched,95.35
    Pulp Fiction,word,cow,96.08
    Pulp Fiction,word,please,96.20
    Pulp Fiction,word,loving,96.32
    Pulp Fiction,word,mouse,96.33
    Pulp Fiction,word,heavenly,96.45
    Pulp Fiction,word,nice,96.50
    Pulp Fiction,word,n-word ,96.78
    Pulp Fiction,word,n-word ,100.53
    Pulp Fiction,word,nice,102.35
    Pulp Fiction,word,nice,102.38
    Pulp Fiction,word,cower,102.63
    Pulp Fiction,word,please,102.67
    Pulp Fiction,word,please,103.35
    Pulp Fiction,word,cow,103.93
    Pulp Fiction,word,cow,104.88
    Pulp Fiction,word,cow,104.95
    Pulp Fiction,death,,105.45
    Pulp Fiction,word,cow,106.40
    Pulp Fiction,word,loving,106.62
    Pulp Fiction,word,n-word ,107.08
    Pulp Fiction,word,ouch,107.33
    Pulp Fiction,word,sun,107.37
    Pulp Fiction,word,sun,108.22
    Pulp Fiction,word,sun,108.73
    Pulp Fiction,word,mouse,109.97
    Pulp Fiction,word,cow,110.00
    Pulp Fiction,word,loving,110.70
    Pulp Fiction,word,loving,111.15
    Pulp Fiction,word,cow,111.73
    Pulp Fiction,word,bee,111.78
    Pulp Fiction,death,,112.73
    Pulp Fiction,word,bee,112.87
    Pulp Fiction,word,bee,112.87
    Pulp Fiction,word,cow,112.88
    Pulp Fiction,word,nice,112.95
    Pulp Fiction,word,ouch,112.97
    Pulp Fiction,word,cow,112.98
    Pulp Fiction,word,mouse,113.08
    Pulp Fiction,word,pleases,113.13
    Pulp Fiction,death,,113.37
    Pulp Fiction,word,cow,113.65
    Pulp Fiction,word,nice,113.75
    Pulp Fiction,word,loving,113.93
    Pulp Fiction,word,mouse,114.03
    Pulp Fiction,word,heavenly,114.43
    Pulp Fiction,word,loving,114.52
    Pulp Fiction,word,mouse,114.53
    Pulp Fiction,word,loving,114.57
    Pulp Fiction,word,mouse,114.60
    Pulp Fiction,word,mouse,114.63
    Pulp Fiction,word,loving,114.75
    Pulp Fiction,word,loving,114.85
    Pulp Fiction,word,n-word ,115.08
    Pulp Fiction,word,mouse,115.12
    Pulp Fiction,word,loving,115.53
    Pulp Fiction,word,cow,115.55
    Pulp Fiction,word,sun,115.63
    Pulp Fiction,word,nice,115.68
    Pulp Fiction,word,loving,115.72
    Pulp Fiction,word,sun,115.87
    Pulp Fiction,word,ouch,115.88
    Pulp Fiction,death,,116.08
    Pulp Fiction,word,cow,116.10
    Pulp Fiction,word,mouse,116.12
    Pulp Fiction,word,cow,116.17
    Pulp Fiction,word,sun,116.23
    Pulp Fiction,word,mouse,116.23
    Pulp Fiction,word,heavenly,116.33
    Pulp Fiction,word,hello,116.38
    Pulp Fiction,word,loving,116.42
    Pulp Fiction,word,please,116.50
    Pulp Fiction,word,mouse,116.55
    Pulp Fiction,word,loving,116.57
    Pulp Fiction,word,loving,116.67
    Pulp Fiction,word,mouse,116.70
    Pulp Fiction,word,sun,116.83
    Pulp Fiction,word,cow,116.85
    Pulp Fiction,word,loving,117.02
    Pulp Fiction,word,mouse,117.02
    Pulp Fiction,word,loving,117.13
    Pulp Fiction,word,sunes,117.18
    Pulp Fiction,word,mouse,117.52
    Pulp Fiction,word,mouse,117.53
    Pulp Fiction,word,mouse,117.60
    Pulp Fiction,word,sun,117.63
    Pulp Fiction,word,cow,117.65
    Pulp Fiction,word,n-word ,117.65
    Pulp Fiction,word,cow,117.67
    Pulp Fiction,word,mouse,117.78
    Pulp Fiction,word,loving,117.87
    Pulp Fiction,word,nice,117.90
    Pulp Fiction,word,mouse,117.98
    Pulp Fiction,word,nice,118.40
    Pulp Fiction,word,mouse,118.45
    Pulp Fiction,word,mouse,118.58
    Pulp Fiction,word,loving,118.68
    Pulp Fiction,word,mouse,118.77
    Pulp Fiction,word,n-word ,118.92
    Pulp Fiction,word,n-word ,119.07
    Pulp Fiction,word,mouse,119.12
    Pulp Fiction,word,n-word ,119.17
    Pulp Fiction,word,n-word ,119.30
    Pulp Fiction,word,loving,119.32
    Pulp Fiction,word,please,119.37
    Pulp Fiction,word,loving,119.40
    Pulp Fiction,word,loving,119.52
    Pulp Fiction,word,loving,119.57
    Pulp Fiction,word,loving,119.72
    Pulp Fiction,word,loving,119.77
    Pulp Fiction,word,cow,120.12
    Pulp Fiction,word,cow,120.18
    Pulp Fiction,word,mouse,120.18
    Pulp Fiction,word,cow,120.25
    Pulp Fiction,word,mouse,120.25
    Pulp Fiction,word,loving,120.27
    Pulp Fiction,word,mouse,120.27
    Pulp Fiction,word,cow,120.30
    Pulp Fiction,word,mouse,120.30
    Pulp Fiction,word,loving,120.55
    Pulp Fiction,word,mouse,120.55
    Pulp Fiction,word,mouse,120.83
    Pulp Fiction,word,heavenly,121.03
    Pulp Fiction,word,sun,121.07
    Pulp Fiction,word,please,121.12
    Pulp Fiction,word,n-word ,121.13
    Pulp Fiction,word,please,121.27
    Pulp Fiction,word,n-word ,121.32
    Pulp Fiction,word,please,121.45
    Pulp Fiction,word,mouse,121.47
    Pulp Fiction,word,please,123.85
    Pulp Fiction,word,loving,125.57
    Pulp Fiction,word,loving,126.00
    Pulp Fiction,word,sun,128.00
    Pulp Fiction,word,mouse,128.00
    Pulp Fiction,word,bee,128.03
    Pulp Fiction,word,mouse,128.03
    Pulp Fiction,word,cow,128.17
    Pulp Fiction,word,mouse,128.18
    Pulp Fiction,word,please,128.20
    Pulp Fiction,word,mouse,128.22
    Pulp Fiction,word,sun,128.27
    Pulp Fiction,word,loving,128.35
    Pulp Fiction,word,loving,128.40
    Pulp Fiction,word,loving,128.43
    Pulp Fiction,word,please,128.53
    Pulp Fiction,word,please,128.53
    Pulp Fiction,word,cow,128.67
    Pulp Fiction,word,please,128.68
    Pulp Fiction,word,loving,128.73
    Pulp Fiction,word,n-word ,128.78
    Pulp Fiction,word,aaaas,129.12
    Pulp Fiction,word,mouse,129.52
    Pulp Fiction,word,sun,129.33
    Pulp Fiction,word,nice,129.50
    Pulp Fiction,word,mouse,129.83
    Pulp Fiction,word,nice,130.08
    Pulp Fiction,word,loving,130.10
    Pulp Fiction,word,cow,130.22
    Pulp Fiction,word,cow,130.22
    Pulp Fiction,word,ouch,130.25
    Pulp Fiction,word,nice,130.30
    Pulp Fiction,word,please,130.90
    Pulp Fiction,word,loving,131.50
    Pulp Fiction,word,mouse,131.57
    Pulp Fiction,word,loving,131.85
    Pulp Fiction,word,loving,133.48
    Pulp Fiction,word,loving,133.55
    Pulp Fiction,word,loving,133.63
    Pulp Fiction,word,pleases,134.00
    Pulp Fiction,word,mouse,134.05
    Pulp Fiction,word,heavenly,134.55
    Pulp Fiction,word,mouse,134.85
    Pulp Fiction,word,mouse,135.35
    Pulp Fiction,word,mouse,135.38
    Pulp Fiction,word,loving,135.47
    Pulp Fiction,word,mouse,135.48
    Pulp Fiction,word,loving,135.77
    Pulp Fiction,word,cow,135.93
    Pulp Fiction,word,mouse,136.60
    Pulp Fiction,word,loving,136.80
    Pulp Fiction,word,loving,137.05
    Pulp Fiction,word,mouse,137.22
    Pulp Fiction,word,cow,137.57
    Pulp Fiction,word,loving,137.93
    Pulp Fiction,word,pleases,138.00
    Pulp Fiction,word,cow,138.10
    Pulp Fiction,word,loving,138.22
    Pulp Fiction,word,cow,138.23
    Pulp Fiction,word,cow,138.28
    Pulp Fiction,word,loving,138.30
    Pulp Fiction,word,loving,138.33
    Pulp Fiction,word,loving,138.37
    Pulp Fiction,word,cow,138.43
    Pulp Fiction,word,loving,138.48
    Pulp Fiction,word,loving,138.65
    Pulp Fiction,word,loving,138.68
    Pulp Fiction,word,cow,138.87
    Pulp Fiction,word,loving,139.00
    Pulp Fiction,word,cow,139.23
    Pulp Fiction,word,loving,139.53
    Pulp Fiction,word,loving,139.60
    Pulp Fiction,word,loving,139.75
    Pulp Fiction,word,loving,139.85
    Pulp Fiction,word,loving,139.97
    Pulp Fiction,word,cow,140.05
    Pulp Fiction,word,mouse,140.72
    Pulp Fiction,word,loving,141.05
    Pulp Fiction,word,cow,141.15
    Pulp Fiction,word,nice,141.18
    Pulp Fiction,word,loving,141.43
    Pulp Fiction,word,nice,142.23
    Pulp Fiction,word,hello,142.37
    Pulp Fiction,word,hello,142.40
    Pulp Fiction,word,hello,142.42
    Pulp Fiction,word,loving,142.45
    Pulp Fiction,word,hello,142.45
    Pulp Fiction,word,loving,142.50
    Pulp Fiction,word,hello,142.50
    Pulp Fiction,word,pleases,143.77
    Pulp Fiction,word,pleases,143.80
    Pulp Fiction,word,sunes,144.25
    Pulp Fiction,word,loving,144.27
    Pulp Fiction,word,mouse,144.30
    Pulp Fiction,word,mouse,144.48
    Pulp Fiction,word,sun,144.53
    Pulp Fiction,word,nice,144.82
    Pulp Fiction,word,please,145.38
    Pulp Fiction,word,please,145.68
    Pulp Fiction,word,loving,146.23
    Pulp Fiction,word,nice,146.30
    Pulp Fiction,word,heavenly,146.32
    Pulp Fiction,word,cow,146.35
    Pulp Fiction,word,sun,146.67
    Pulp Fiction,word,mouse,147.43
    Pulp Fiction,word,sun,147.48
    Pulp Fiction,word,mouse,147.58
    Pulp Fiction,word,please,147.60
    Pulp Fiction,word,sun,147.62
    Pulp Fiction,word,mouse,147.65
    Pulp Fiction,word,sun,147.90
    Pulp Fiction,word,mouse,148.15
    Kill Bill: Vol. 1,word,hello,7.12
    Kill Bill: Vol. 1,word,sun,8.10
    Kill Bill: Vol. 1,word,ouch,8.12
    Kill Bill: Vol. 1,word,hello,10.45
    Kill Bill: Vol. 1,word,mouse,10.50
    Kill Bill: Vol. 1,word,bee,10.95
    Kill Bill: Vol. 1,word,bee,10.98
    Kill Bill: Vol. 1,word,hello,11.87
    Kill Bill: Vol. 1,word,nice,12.17
    Kill Bill: Vol. 1,word,loving,12.17
    Kill Bill: Vol. 1,word,hello,12.48
    Kill Bill: Vol. 1,word,cow,13.07
    Kill Bill: Vol. 1,word,hello,13.08
    Kill Bill: Vol. 1,word,mouse,13.13
    Kill Bill: Vol. 1,word,heavenly,13.18
    Kill Bill: Vol. 1,word,sun,13.18
    Kill Bill: Vol. 1,word,heavenly,13.28
    Kill Bill: Vol. 1,word,hello,13.42
    Kill Bill: Vol. 1,death,,13.53
    Kill Bill: Vol. 1,word,nice,17.20
    Kill Bill: Vol. 1,word,heaven,17.58
    Kill Bill: Vol. 1,word,nice,18.02
    Kill Bill: Vol. 1,word,mouse,18.07
    Kill Bill: Vol. 1,word,nice,19.32
    Kill Bill: Vol. 1,word,cocksucker,19.73
    Kill Bill: Vol. 1,word,cow,22.93
    Kill Bill: Vol. 1,word,mouse,23.40
    Kill Bill: Vol. 1,word,mouse,23.45
    Kill Bill: Vol. 1,word,loving,25.02
    Kill Bill: Vol. 1,word,mousehead,25.12
    Kill Bill: Vol. 1,word,cow,28.03
    Kill Bill: Vol. 1,word,cunt,28.43
    Kill Bill: Vol. 1,word,mouse,28.88
    Kill Bill: Vol. 1,word,nice,29.37
    Kill Bill: Vol. 1,death,,29.75
    Kill Bill: Vol. 1,word,bbbb,31.07
    Kill Bill: Vol. 1,word,mouse,31.32
    Kill Bill: Vol. 1,word,cow,31.42
    Kill Bill: Vol. 1,word,cow,31.60
    Kill Bill: Vol. 1,death,,31.68
    Kill Bill: Vol. 1,word,hand,32.12
    Kill Bill: Vol. 1,word,cower,32.15
    Kill Bill: Vol. 1,word,cunts,35.15
    Kill Bill: Vol. 1,word,aaaas,35.22
    Kill Bill: Vol. 1,death,,37.65
    Kill Bill: Vol. 1,death,,39.57
    Kill Bill: Vol. 1,death,,41.03
    Kill Bill: Vol. 1,death,,42.57
    Kill Bill: Vol. 1,death,,42.77
    Kill Bill: Vol. 1,death,,43.48
    Kill Bill: Vol. 1,word,mouse,46.45
    Kill Bill: Vol. 1,word,honey,46.47
    Kill Bill: Vol. 1,word,sun,46.63
    Kill Bill: Vol. 1,word,nice,47.97
    Kill Bill: Vol. 1,word,heaven,48.03
    Kill Bill: Vol. 1,word,ouch,48.60
    Kill Bill: Vol. 1,death,,60.57
    Kill Bill: Vol. 1,word,honey,62.33
    Kill Bill: Vol. 1,word,cowface,62.35
    Kill Bill: Vol. 1,word,hello,62.87
    Kill Bill: Vol. 1,death,,62.97
    Kill Bill: Vol. 1,word,loving,64.20
    Kill Bill: Vol. 1,word,cower,64.23
    Kill Bill: Vol. 1,word,helloes,64.32
    Kill Bill: Vol. 1,word,loving,64.38
    Kill Bill: Vol. 1,word,nice,73.48
    Kill Bill: Vol. 1,death,,75.77
    Kill Bill: Vol. 1,death,,76.02
    Kill Bill: Vol. 1,death,,76.02
    Kill Bill: Vol. 1,death,,76.02
    Kill Bill: Vol. 1,death,,76.48
    Kill Bill: Vol. 1,death,,77.02
    Kill Bill: Vol. 1,death,,80.32
    Kill Bill: Vol. 1,death,,82.95
    Kill Bill: Vol. 1,death,,82.98
    Kill Bill: Vol. 1,death,,83.00
    Kill Bill: Vol. 1,death,,83.03
    Kill Bill: Vol. 1,death,,83.05
    Kill Bill: Vol. 1,death,,83.05
    Kill Bill: Vol. 1,death,,83.05
    Kill Bill: Vol. 1,death,,83.08
    Kill Bill: Vol. 1,death,,83.12
    Kill Bill: Vol. 1,death,,83.18
    Kill Bill: Vol. 1,death,,83.38
    Kill Bill: Vol. 1,death,,83.42
    Kill Bill: Vol. 1,death,,83.48
    Kill Bill: Vol. 1,death,,83.65
    Kill Bill: Vol. 1,death,,83.72
    Kill Bill: Vol. 1,death,,83.83
    Kill Bill: Vol. 1,death,,83.88
    Kill Bill: Vol. 1,death,,83.93
    Kill Bill: Vol. 1,death,,84.05
    Kill Bill: Vol. 1,death,,84.18
    Kill Bill: Vol. 1,death,,84.23
    Kill Bill: Vol. 1,death,,84.27
    Kill Bill: Vol. 1,death,,84.58
    Kill Bill: Vol. 1,death,,84.92
    Kill Bill: Vol. 1,death,,84.92
    Kill Bill: Vol. 1,death,,85.00
    Kill Bill: Vol. 1,death,,85.08
    Kill Bill: Vol. 1,death,,85.10
    Kill Bill: Vol. 1,death,,85.20
    Kill Bill: Vol. 1,death,,85.25
    Kill Bill: Vol. 1,death,,85.25
    Kill Bill: Vol. 1,death,,85.28
    Kill Bill: Vol. 1,death,,85.38
    Kill Bill: Vol. 1,death,,85.47
    Kill Bill: Vol. 1,death,,85.98
    Kill Bill: Vol. 1,death,,86.05
    Kill Bill: Vol. 1,death,,86.15
    Kill Bill: Vol. 1,death,,86.20
    Kill Bill: Vol. 1,death,,86.27
    Kill Bill: Vol. 1,death,,86.35
    Kill Bill: Vol. 1,death,,86.40
    Kill Bill: Vol. 1,death,,87.52
    Kill Bill: Vol. 1,death,,87.63
    Kill Bill: Vol. 1,word,loving,88.18
    Kill Bill: Vol. 1,death,,88.95
    Kill Bill: Vol. 1,death,,97.60
    Kill Bill: Vol. 1,word,heaven,100.10
    Kill Bill: Vol. 2,word,heaven,1.18
    Kill Bill: Vol. 2,word,hello,4.83
    Kill Bill: Vol. 2,word,sun,9.02
    Kill Bill: Vol. 2,word,cockblockery,9.62
    Kill Bill: Vol. 2,word,nice,11.38
    Kill Bill: Vol. 2,word,ouch,12.82
    Kill Bill: Vol. 2,death,,14.38
    Kill Bill: Vol. 2,death,,14.38
    Kill Bill: Vol. 2,death,,14.38
    Kill Bill: Vol. 2,death,,14.38
    Kill Bill: Vol. 2,death,,14.38
    Kill Bill: Vol. 2,death,,14.38
    Kill Bill: Vol. 2,death,,14.38
    Kill Bill: Vol. 2,death,,14.38
    Kill Bill: Vol. 2,death,,14.38
    Kill Bill: Vol. 2,word,yess,15.53
    Kill Bill: Vol. 2,word,jew (verb),17.33
    Kill Bill: Vol. 2,word,loving,18.70
    Kill Bill: Vol. 2,word,sun,18.72
    Kill Bill: Vol. 2,word,loving,19.37
    Kill Bill: Vol. 2,word,baby,20.17
    Kill Bill: Vol. 2,word,loving,20.30
    Kill Bill: Vol. 2,word,loving,20.57
    Kill Bill: Vol. 2,word,loving,20.98
    Kill Bill: Vol. 2,word,loving,21.37
    Kill Bill: Vol. 2,word,loving,21.42
    Kill Bill: Vol. 2,word,loving,21.52
    Kill Bill: Vol. 2,word,mouse,21.80
    Kill Bill: Vol. 2,word,mousety,22.50
    Kill Bill: Vol. 2,word,sun,26.62
    Kill Bill: Vol. 2,word,mouse,27.03
    Kill Bill: Vol. 2,word,hello,28.93
    Kill Bill: Vol. 2,word,sun,29.92
    Kill Bill: Vol. 2,word,ouch,30.47
    Kill Bill: Vol. 2,word,hello,33.02
    Kill Bill: Vol. 2,word,hand,33.15
    Kill Bill: Vol. 2,word,hand,33.23
    Kill Bill: Vol. 2,word,sun,34.60
    Kill Bill: Vol. 2,word,nice,34.70
    Kill Bill: Vol. 2,word,loving,34.77
    Kill Bill: Vol. 2,word,honeys,44.12
    Kill Bill: Vol. 2,word,cower,44.65
    Kill Bill: Vol. 2,word,sun,47.13
    Kill Bill: Vol. 2,word,nice,49.20
    Kill Bill: Vol. 2,word,yess,49.20
    Kill Bill: Vol. 2,word,nice,50.93
    Kill Bill: Vol. 2,word,bee,65.67
    Kill Bill: Vol. 2,word,horemouse,68.40
    Kill Bill: Vol. 2,word,mouse,72.45
    Kill Bill: Vol. 2,death,,72.67
    Kill Bill: Vol. 2,word,hello,78.90
    Kill Bill: Vol. 2,word,loving,79.88
    Kill Bill: Vol. 2,word,hello,79.88
    Kill Bill: Vol. 2,word,loving,79.93
    Kill Bill: Vol. 2,word,cow,79.93
    Kill Bill: Vol. 2,word,loving,80.28
    Kill Bill: Vol. 2,word,loving,80.63
    Kill Bill: Vol. 2,word,mouse,80.75
    Kill Bill: Vol. 2,word,hand,85.35
    Kill Bill: Vol. 2,word,hand,85.40
    Kill Bill: Vol. 2,word,loving,102.12
    Kill Bill: Vol. 2,word,nice,103.23
    Kill Bill: Vol. 2,word,cow,103.28
    Kill Bill: Vol. 2,word,mouse,104.63
    Kill Bill: Vol. 2,word,sun,107.43
    Kill Bill: Vol. 2,word,cow,110.23
    Kill Bill: Vol. 2,word,loving,110.93
    Kill Bill: Vol. 2,word,hello,110.97
    Kill Bill: Vol. 2,word,loving,111.05
    Kill Bill: Vol. 2,word,bbbb,111.58
    Kill Bill: Vol. 2,word,mouseless,111.92
    Kill Bill: Vol. 2,word,loving,112.52
    Kill Bill: Vol. 2,word,mouse,112.52
    Kill Bill: Vol. 2,word,loving,116.28
    Kill Bill: Vol. 2,word,babys,116.28
    Kill Bill: Vol. 2,word,loving,116.57
    Kill Bill: Vol. 2,word,honey,117.25
    Kill Bill: Vol. 2,word,honey,117.35
    Kill Bill: Vol. 2,word,cunt,119.58
    Kill Bill: Vol. 2,death,,121.12
    Inglorious Basterds,death,,20.35
    Inglorious Basterds,death,,20.35
    Inglorious Basterds,death,,20.35
    Inglorious Basterds,death,,20.35
    Inglorious Basterds,word,heaven,22.20
    Inglorious Basterds,word,nice,22.22
    Inglorious Basterds,word,loving,22.32
    Inglorious Basterds,word,hello,22.55
    Inglorious Basterds,death,,28.57
    Inglorious Basterds,death,,28.63
    Inglorious Basterds,death,,28.80
    Inglorious Basterds,death,,29.07
    Inglorious Basterds,death,,29.22
    Inglorious Basterds,death,,29.23
    Inglorious Basterds,death,,29.25
    Inglorious Basterds,death,,29.93
    Inglorious Basterds,word,loving,30.93
    Inglorious Basterds,word,nice,31.05
    Inglorious Basterds,word,nice,32.52
    Inglorious Basterds,word,sun,32.65
    Inglorious Basterds,word,cow,32.97
    Inglorious Basterds,death,,34.77
    Inglorious Basterds,word,mouseting,34.90
    Inglorious Basterds,word,loving,34.97
    Inglorious Basterds,word,loving,35.05
    Inglorious Basterds,word,loving,35.10
    Inglorious Basterds,death,,35.17
    Inglorious Basterds,word,ouch,35.20
    Inglorious Basterds,word,cow,35.30
    Inglorious Basterds,word,sun,48.17
    Inglorious Basterds,word,negro ,48.68
    Inglorious Basterds,word,mouse,51.48
    Inglorious Basterds,word,heaven,52.55
    Inglorious Basterds,word,negro ,58.43
    Inglorious Basterds,word,negro ,59.38
    Inglorious Basterds,word,negro ,59.57
    Inglorious Basterds,word,cow,61.83
    Inglorious Basterds,word,nice,69.48
    Inglorious Basterds,word,loving,69.50
    Inglorious Basterds,word,squaw,73.00
    Inglorious Basterds,word,sun,75.83
    Inglorious Basterds,word,negro ,86.97
    Inglorious Basterds,word,slut,90.53
    Inglorious Basterds,word,heaven,92.03
    Inglorious Basterds,word,ouch,92.27
    Inglorious Basterds,death,,92.68
    Inglorious Basterds,death,,92.68
    Inglorious Basterds,death,,92.70
    Inglorious Basterds,death,,92.72
    Inglorious Basterds,death,,92.73
    Inglorious Basterds,death,,92.75
    Inglorious Basterds,death,,92.77
    Inglorious Basterds,death,,92.83
    Inglorious Basterds,death,,92.87
    Inglorious Basterds,death,,92.87
    Inglorious Basterds,word,loving,96.87
    Inglorious Basterds,death,,96.95
    Inglorious Basterds,word,nice,97.12
    Inglorious Basterds,word,cow,97.53
    Inglorious Basterds,word,heaven,100.97
    Inglorious Basterds,word,ouch,101.00
    Inglorious Basterds,word,cow,101.82
    Inglorious Basterds,word,sun,102.68
    Inglorious Basterds,word,mouse,103.40
    Inglorious Basterds,word,loving,103.82
    Inglorious Basterds,death,,104.60
    Inglorious Basterds,death,,104.60
    Inglorious Basterds,death,,104.60
    Inglorious Basterds,death,,104.60
    Inglorious Basterds,word,cower,107.77
    Inglorious Basterds,word,cow,107.82
    Inglorious Basterds,word,sun,111.43
    Inglorious Basterds,death,,121.13
    Inglorious Basterds,word,loving,121.53
    Inglorious Basterds,word,mousehead,121.53
    Inglorious Basterds,word,cow,121.55
    Inglorious Basterds,word,cow,121.57
    Inglorious Basterds,word,mousehead,121.62
    Inglorious Basterds,word,cow,121.63
    Inglorious Basterds,word,cow,121.68
    Inglorious Basterds,word,nice,121.77
    Inglorious Basterds,word,helloes,121.78
    Inglorious Basterds,word,nice,121.87
    Inglorious Basterds,word,ouch,124.72
    Inglorious Basterds,word,mouse,137.82
    Inglorious Basterds,word,sun,138.93
    Inglorious Basterds,death,,141.47
    Inglorious Basterds,death,,141.53
    Inglorious Basterds,death,,142.42
    Inglorious Basterds,death,,142.52
    Inglorious Basterds,death,,144.17
    Inglorious Basterds,death,,144.17
    Inglorious Basterds,death,,144.20
    Inglorious Basterds,death,,144.63
    Inglorious Basterds,death,,144.63
    Inglorious Basterds,death,,144.65
    Inglorious Basterds,death,,144.67
    Inglorious Basterds,death,,144.68
    Inglorious Basterds,death,,144.85
    Inglorious Basterds,death,,144.85
    Inglorious Basterds,death,,144.85
    Inglorious Basterds,death,,145.10
    Inglorious Basterds,death,,145.60
    Inglorious Basterds,death,,147.37
    Inglorious Basterds,word,cow,147.62
    Inglorious Basterds,word,nice,148.73
    Django Unchained,word,nice,7.23
    Django Unchained,death,,7.75
    Django Unchained,word,nice,8.37
    Django Unchained,word,hello,8.38
    Django Unchained,word,ouch,8.65
    Django Unchained,word,loving,8.87
    Django Unchained,word,ouch,8.88
    Django Unchained,word,n-word ,9.80
    Django Unchained,word,nice,10.07
    Django Unchained,word,heaven,10.53
    Django Unchained,death,,12.63
    Django Unchained,word,n-word ,13.57
    Django Unchained,word,n-word ,14.07
    Django Unchained,word,heaven,14.75
    Django Unchained,word,n-word ,14.78
    Django Unchained,word,sun,19.37
    Django Unchained,death,,19.62
    Django Unchained,word,nice,20.25
    Django Unchained,word,n-word ,20.47
    Django Unchained,word,heaven,22.67
    Django Unchained,word,n-word ,24.98
    Django Unchained,word,n-word ,28.55
    Django Unchained,word,n-word ,28.65
    Django Unchained,word,n-word ,28.80
    Django Unchained,word,n-word ,29.38
    Django Unchained,word,n-word ,29.50
    Django Unchained,word,n-word ,29.65
    Django Unchained,word,n-word ,31.07
    Django Unchained,word,n-word ,31.10
    Django Unchained,word,ouch,33.12
    Django Unchained,death,,36.47
    Django Unchained,word,nice,36.55
    Django Unchained,word,hello,36.57
    Django Unchained,death,,37.45
    Django Unchained,death,,38.03
    Django Unchained,word,helloes,40.92
    Django Unchained,word,n-word ,41.68
    Django Unchained,word,n-word ,42.02
    Django Unchained,word,loving,42.23
    Django Unchained,word,mouse,42.23
    Django Unchained,word,loving,42.33
    Django Unchained,word,mouse,42.38
    Django Unchained,word,nice,42.45
    Django Unchained,word,mouse,42.47
    Django Unchained,word,nice,42.50
    Django Unchained,word,mouse,43.12
    Django Unchained,word,loving,43.22
    Django Unchained,word,loving,43.25
    Django Unchained,word,loving,43.27
    Django Unchained,word,cow,43.28
    Django Unchained,word,helloes,43.42
    Django Unchained,word,n-word ,43.65
    Django Unchained,word,nice,44.30
    Django Unchained,word,loving,44.42
    Django Unchained,word,mouse,44.55
    Django Unchained,word,n-word ,44.58
    Django Unchained,word,n-word ,44.63
    Django Unchained,word,n-word ,44.67
    Django Unchained,word,mouse,45.50
    Django Unchained,death,,45.78
    Django Unchained,word,heaven,47.65
    Django Unchained,word,heaven,48.30
    Django Unchained,word,ouch,53.08
    Django Unchained,death,,55.07
    Django Unchained,death,,56.58
    Django Unchained,death,,56.62
    Django Unchained,death,,56.63
    Django Unchained,death,,56.65
    Django Unchained,word,n-word ,59.42
    Django Unchained,word,niceed,59.65
    Django Unchained,word,n-word ,59.75
    Django Unchained,word,cow,60.50
    Django Unchained,word,loving,62.22
    Django Unchained,word,n-word ,63.20
    Django Unchained,word,n-word ,64.78
    Django Unchained,death,,66.90
    Django Unchained,word,n-word ,70.10
    Django Unchained,word,n-word ,71.17
    Django Unchained,word,n-word ,71.20
    Django Unchained,word,n-word ,71.23
    Django Unchained,word,n-word ,71.28
    Django Unchained,word,n-word ,71.35
    Django Unchained,word,n-word ,71.87
    Django Unchained,word,n-word ,73.17
    Django Unchained,word,n-word ,73.23
    Django Unchained,word,n-word ,73.32
    Django Unchained,word,n-word ,73.73
    Django Unchained,word,n-word ,74.00
    Django Unchained,word,n-word ,74.40
    Django Unchained,word,nice,74.77
    Django Unchained,word,n-word ,74.83
    Django Unchained,word,heaven,75.67
    Django Unchained,word,nice,76.20
    Django Unchained,word,n-word ,76.30
    Django Unchained,word,n-word ,76.37
    Django Unchained,word,sun,76.45
    Django Unchained,word,nice,76.45
    Django Unchained,word,heaven,76.92
    Django Unchained,word,n-word ,78.48
    Django Unchained,word,sun,79.57
    Django Unchained,word,nice,79.63
    Django Unchained,word,nice,79.77
    Django Unchained,word,n-word ,79.80
    Django Unchained,word,n-word ,81.32
    Django Unchained,word,nice,81.68
    Django Unchained,word,n-word ,82.98
    Django Unchained,word,n-word ,83.47
    Django Unchained,word,n-word ,83.52
    Django Unchained,word,n-word ,83.68
    Django Unchained,death,,84.38
    Django Unchained,word,n-word ,84.47
    Django Unchained,word,sun,88.32
    Django Unchained,word,n-word ,88.35
    Django Unchained,word,n-word ,88.75
    Django Unchained,word,sun,88.97
    Django Unchained,word,n-word ,89.13
    Django Unchained,word,n-word ,89.13
    Django Unchained,word,n-word ,89.35
    Django Unchained,word,honey,89.52
    Django Unchained,word,n-word ,89.62
    Django Unchained,word,sun,90.03
    Django Unchained,word,please,90.03
    Django Unchained,word,nice,90.17
    Django Unchained,word,n-word ,90.32
    Django Unchained,word,nice,90.37
    Django Unchained,word,n-word ,90.42
    Django Unchained,word,mouse,90.43
    Django Unchained,word,sun,90.88
    Django Unchained,word,n-word ,91.00
    Django Unchained,word,n-word ,91.02
    Django Unchained,word,n-word ,91.17
    Django Unchained,word,n-word ,91.18
    Django Unchained,word,sun,92.12
    Django Unchained,word,ouch,92.23
    Django Unchained,word,ouch,92.25
    Django Unchained,word,mouse,92.27
    Django Unchained,word,ouch,92.33
    Django Unchained,word,hello,92.37
    Django Unchained,word,n-word ,92.53
    Django Unchained,word,n-word ,92.67
    Django Unchained,word,sun,92.78
    Django Unchained,word,sun,93.22
    Django Unchained,word,n-word ,96.73
    Django Unchained,word,sun,101.02
    Django Unchained,word,n-word ,101.48
    Django Unchained,word,n-word ,101.97
    Django Unchained,word,n-word ,102.07
    Django Unchained,word,n-word ,102.32
    Django Unchained,word,n-word ,102.60
    Django Unchained,word,n-word ,102.78
    Django Unchained,word,n-word ,102.83
    Django Unchained,word,n-word ,103.02
    Django Unchained,word,n-word ,103.15
    Django Unchained,word,n-word ,103.20
    Django Unchained,word,heaven,103.83
    Django Unchained,word,n-word ,104.23
    Django Unchained,word,n-word ,104.27
    Django Unchained,word,sun,104.35
    Django Unchained,word,n-word ,104.90
    Django Unchained,word,hello,104.97
    Django Unchained,word,n-word ,105.62
    Django Unchained,word,n-word ,106.12
    Django Unchained,word,sun,108.38
    Django Unchained,word,n-word ,108.48
    Django Unchained,word,n-word ,108.65
    Django Unchained,word,n-word ,109.12
    Django Unchained,word,n-word ,109.18
    Django Unchained,word,n-word ,109.20
    Django Unchained,word,nice,109.33
    Django Unchained,word,nice,111.33
    Django Unchained,word,ouch,111.53
    Django Unchained,word,n-word ,112.08
    Django Unchained,word,mouse,112.08
    Django Unchained,word,bee,112.08
    Django Unchained,word,pleases,113.05
    Django Unchained,word,heaven,113.22
    Django Unchained,word,sun,113.25
    Django Unchained,word,n-word ,113.50
    Django Unchained,word,n-word ,113.97
    Django Unchained,word,n-word ,114.05
    Django Unchained,word,cow,114.15
    Django Unchained,word,hello,114.18
    Django Unchained,word,nice,114.93
    Django Unchained,word,helloes,115.02
    Django Unchained,word,helloes,115.07
    Django Unchained,word,ouch,116.65
    Django Unchained,word,nice,117.85
    Django Unchained,word,jacksun,120.65
    Django Unchained,word,sun,121.12
    Django Unchained,word,nice,121.12
    Django Unchained,word,n-word ,121.37
    Django Unchained,word,n-word ,121.67
    Django Unchained,word,n-word ,122.45
    Django Unchained,word,nice,122.60
    Django Unchained,word,sun,122.63
    Django Unchained,word,n-word ,123.42
    Django Unchained,word,mouse,130.07
    Django Unchained,word,n-word ,130.38
    Django Unchained,word,sun,130.45
    Django Unchained,death,,131.27
    Django Unchained,death,,131.53
    Django Unchained,death,,131.72
    Django Unchained,death,,131.80
    Django Unchained,death,,131.83
    Django Unchained,death,,131.92
    Django Unchained,death,,132.05
    Django Unchained,death,,132.13
    Django Unchained,death,,132.13
    Django Unchained,death,,132.13
    Django Unchained,word,loving,132.22
    Django Unchained,word,n-word ,131.73
    Django Unchained,word,mouse,132.10
    Django Unchained,word,hello,132.12
    Django Unchained,word,loving,132.22
    Django Unchained,word,ouch,132.30
    Django Unchained,word,hello,132.32
    Django Unchained,word,loving,132.35
    Django Unchained,word,ouch,132.37
    Django Unchained,word,cow,132.42
    Django Unchained,word,cow,132.53
    Django Unchained,word,n-word ,132.55
    Django Unchained,death,,133.08
    Django Unchained,word,n-word ,133.17
    Django Unchained,word,please,133.27
    Django Unchained,death,,133.38
    Django Unchained,death,,133.38
    Django Unchained,word,mouse,133.42
    Django Unchained,death,,133.47
    Django Unchained,death,,133.50
    Django Unchained,death,,133.52
    Django Unchained,death,,133.65
    Django Unchained,death,,133.83
    Django Unchained,death,,133.87
    Django Unchained,word,mouse,134.40
    Django Unchained,word,nice,134.77
    Django Unchained,word,nice,135.18
    Django Unchained,word,horsemouse,135.43
    Django Unchained,word,sun,135.65
    Django Unchained,word,nice,135.70
    Django Unchained,word,hello,135.78
    Django Unchained,word,n-word ,136.20
    Django Unchained,word,n-word ,138.30
    Django Unchained,word,sun,140.23
    Django Unchained,word,pleases,140.25
    Django Unchained,word,sun,140.43
    Django Unchained,word,loving,140.50
    Django Unchained,word,n-word ,140.68
    Django Unchained,word,mouse,140.93
    Django Unchained,word,n-word ,140.97
    Django Unchained,word,mouse,141.22
    Django Unchained,word,heaven,141.25
    Django Unchained,word,n-word ,141.27
    Django Unchained,word,sun,141.52
    Django Unchained,word,sun,142.42
    Django Unchained,word,n-word ,142.43
    Django Unchained,word,cow,143.68
    Django Unchained,word,cow,144.20
    Django Unchained,word,sun,144.58
    Django Unchained,word,helloes,144.77
    Django Unchained,word,nice,145.12
    Django Unchained,word,loving,145.17
    Django Unchained,word,mouse,145.22
    Django Unchained,word,sun,145.53
    Django Unchained,word,loving,147.20
    Django Unchained,word,ouch,147.23
    Django Unchained,word,n-word ,147.48
    Django Unchained,word,cow,147.62
    Django Unchained,word,nice,148.43
    Django Unchained,word,n-word ,148.57
    Django Unchained,word,loving,149.02
    Django Unchained,death,,149.10
    Django Unchained,death,,149.10
    Django Unchained,death,,149.13
    Django Unchained,word,nice,152.23
    Django Unchained,word,please,152.35
    Django Unchained,death,,152.37
    Django Unchained,death,,152.38
    Django Unchained,death,,152.40
    Django Unchained,death,,152.40
    Django Unchained,death,,152.47
    Django Unchained,death,,152.47
    Django Unchained,death,,152.50
    Django Unchained,death,,156.77
    Django Unchained,word,hello,157.30
    Django Unchained,death,,157.37
    Django Unchained,death,,157.85
    Django Unchained,word,n-word ,158.62
    Django Unchained,word,n-word ,158.65
    Django Unchained,word,mouse,158.78
    Django Unchained,word,n-word ,158.78
    Django Unchained,word,please,158.90
    Django Unchained,word,ouch,158.92
    Django Unchained,word,n-word ,158.98
    Django Unchained,word,horsemouse,159.18
    Django Unchained,word,n-word ,159.25
    Django Unchained,word,hello,159.33
    Django Unchained,word,please,159.37
    Django Unchained,word,n-word ,159.42
    Django Unchained,word,sun,159.53
    Django Unchained,word,n-word ,159.58
    Django Unchained,word,n-word ,159.65
    Django Unchained,word,sun,159.70
    Django Unchained,word,sun,159.77
    Django Unchained,word,n-word ,159.80
    Django Unchained,word,bee,159.83
    Django Unchained,word,n-word ,159.88
    Django Unchained,word,n-word ,160.20
    Django Unchained,word,sun,160.28
    Django Unchained,death,,160.45
    Jackie Brown,word,sun,4.38
    Jackie Brown,word,mouse,4.53
    Jackie Brown,word,mouse,4.63
    Jackie Brown,word,please,4.85
    Jackie Brown,word,mouse,4.95
    Jackie Brown,word,mouse,5.00
    Jackie Brown,word,please,5.28
    Jackie Brown,word,n-word ,5.37
    Jackie Brown,word,n-word ,5.45
    Jackie Brown,word,loving,5.53
    Jackie Brown,word,ouch,5.60
    Jackie Brown,word,n-word ,5.67
    Jackie Brown,word,mouse,5.70
    Jackie Brown,word,n-word ,6.02
    Jackie Brown,word,please,6.08
    Jackie Brown,word,mouse,6.18
    Jackie Brown,word,please,6.37
    Jackie Brown,word,sun,6.70
    Jackie Brown,word,mouse,7.45
    Jackie Brown,word,mouse,8.35
    Jackie Brown,word,n-word ,8.58
    Jackie Brown,word,n-word ,8.62
    Jackie Brown,word,n-word ,8.65
    Jackie Brown,word,heavenly,8.82
    Jackie Brown,word,pleases,9.23
    Jackie Brown,word,hello,9.97
    Jackie Brown,word,cow,10.08
    Jackie Brown,word,cow,10.12
    Jackie Brown,word,nice,10.20
    Jackie Brown,word,n-word ,10.20
    Jackie Brown,word,nice,10.25
    Jackie Brown,word,pleases,10.50
    Jackie Brown,word,mouse,10.52
    Jackie Brown,word,heavenly,10.53
    Jackie Brown,word,cow,10.58
    Jackie Brown,word,n-word ,12.12
    Jackie Brown,word,mouse,12.82
    Jackie Brown,word,cow,12.82
    Jackie Brown,word,sun,13.10
    Jackie Brown,word,cow,15.63
    Jackie Brown,word,n-word ,15.68
    Jackie Brown,word,n-word ,15.72
    Jackie Brown,word,sun,15.98
    Jackie Brown,word,heavenly,16.03
    Jackie Brown,word,n-word ,16.10
    Jackie Brown,word,sun,16.20
    Jackie Brown,word,n-word ,16.23
    Jackie Brown,word,nice,16.25
    Jackie Brown,word,mouse,16.28
    Jackie Brown,word,sun,16.30
    Jackie Brown,word,sun,16.33
    Jackie Brown,word,heavenly,16.35
    Jackie Brown,word,n-word ,16.38
    Jackie Brown,word,please,16.47
    Jackie Brown,word,heaven,16.52
    Jackie Brown,word,mouse,16.55
    Jackie Brown,word,sun,16.58
    Jackie Brown,word,mouse,16.65
    Jackie Brown,word,n-word ,16.77
    Jackie Brown,word,loving,16.87
    Jackie Brown,word,n-word ,17.12
    Jackie Brown,word,sun,17.22
    Jackie Brown,word,n-word ,17.25
    Jackie Brown,word,cow,17.30
    Jackie Brown,word,mouse,17.40
    Jackie Brown,word,loving,17.42
    Jackie Brown,word,sun,17.48
    Jackie Brown,word,loving,17.52
    Jackie Brown,word,n-word ,17.82
    Jackie Brown,word,n-word ,17.82
    Jackie Brown,word,n-word ,17.85
    Jackie Brown,word,n-word ,17.90
    Jackie Brown,word,n-word ,17.95
    Jackie Brown,word,sun,18.23
    Jackie Brown,word,mouse,18.38
    Jackie Brown,word,n-word ,18.80
    Jackie Brown,word,mouse,19.07
    Jackie Brown,word,please,19.35
    Jackie Brown,word,please,19.45
    Jackie Brown,word,cow,19.47
    Jackie Brown,word,mouse,19.47
    Jackie Brown,word,loving,19.58
    Jackie Brown,word,sun,19.62
    Jackie Brown,word,nice,19.72
    Jackie Brown,word,nice,19.83
    Jackie Brown,word,nice,19.93
    Jackie Brown,word,sun,19.95
    Jackie Brown,word,n-word ,20.05
    Jackie Brown,word,please,20.12
    Jackie Brown,word,sun,20.17
    Jackie Brown,word,nice,20.22
    Jackie Brown,word,sun,20.28
    Jackie Brown,word,sun,20.35
    Jackie Brown,word,n-word ,20.38
    Jackie Brown,word,loving,20.52
    Jackie Brown,word,n-word ,20.57
    Jackie Brown,word,mouse,20.58
    Jackie Brown,word,loving,20.65
    Jackie Brown,word,please,21.05
    Jackie Brown,word,please,21.12
    Jackie Brown,word,nice,21.13
    Jackie Brown,word,please,21.18
    Jackie Brown,word,heaven,21.22
    Jackie Brown,death,,23.08
    Jackie Brown,word,n-word ,23.07
    Jackie Brown,word,mouse,25.53
    Jackie Brown,word,nice,26.13
    Jackie Brown,word,heavenly,26.37
    Jackie Brown,word,sun,26.38
    Jackie Brown,word,n-word ,27.07
    Jackie Brown,word,cow,27.08
    Jackie Brown,word,n-word ,27.20
    Jackie Brown,word,n-word ,27.22
    Jackie Brown,word,n-word ,27.48
    Jackie Brown,word,mousety,28.67
    Jackie Brown,word,loving,28.72
    Jackie Brown,word,nice,29.05
    Jackie Brown,word,loving,29.72
    Jackie Brown,word,cows,30.63
    Jackie Brown,word,mouse,30.63
    Jackie Brown,word,mousetiest,30.77
    Jackie Brown,word,loving,30.78
    Jackie Brown,word,mouse,30.80
    Jackie Brown,word,cow,31.97
    Jackie Brown,word,mouse,32.13
    Jackie Brown,word,mousety,32.40
    Jackie Brown,word,nice,32.65
    Jackie Brown,word,mouse,33.47
    Jackie Brown,word,mouse,33.67
    Jackie Brown,word,loving,36.40
    Jackie Brown,word,mouse,36.42
    Jackie Brown,word,mouse,36.52
    Jackie Brown,word,mouse,36.97
    Jackie Brown,word,mouse,37.00
    Jackie Brown,word,heaven,37.13
    Jackie Brown,word,heavenly,37.15
    Jackie Brown,word,sun,37.28
    Jackie Brown,word,mouse,37.33
    Jackie Brown,word,sun,37.37
    Jackie Brown,word,mouse,37.88
    Jackie Brown,word,mouse,38.58
    Jackie Brown,word,cow,38.95
    Jackie Brown,word,loving,38.98
    Jackie Brown,word,mouse,39.30
    Jackie Brown,word,mouse,39.35
    Jackie Brown,word,hello,44.32
    Jackie Brown,word,sun,45.38
    Jackie Brown,word,heaven,48.10
    Jackie Brown,word,sun,48.10
    Jackie Brown,word,sun,48.17
    Jackie Brown,word,mouse,48.35
    Jackie Brown,word,ouch,48.52
    Jackie Brown,word,mouse,48.53
    Jackie Brown,word,mouseload,48.60
    Jackie Brown,word,mouseload,50.45
    Jackie Brown,word,aaaa,50.88
    Jackie Brown,word,n-word ,50.97
    Jackie Brown,word,heaven,51.03
    Jackie Brown,word,cow,51.05
    Jackie Brown,word,cow,51.10
    Jackie Brown,word,sun,51.22
    Jackie Brown,word,pleases,51.32
    Jackie Brown,word,cow,51.40
    Jackie Brown,word,ouch,51.42
    Jackie Brown,word,sun,51.45
    Jackie Brown,word,loving,51.50
    Jackie Brown,word,sun,51.62
    Jackie Brown,word,cow,51.65
    Jackie Brown,word,heavenly,51.80
    Jackie Brown,word,heavenly,51.97
    Jackie Brown,word,heavenly,53.17
    Jackie Brown,word,sun,57.42
    Jackie Brown,word,cow,57.93
    Jackie Brown,word,sun,59.12
    Jackie Brown,word,mouse,60.20
    Jackie Brown,word,mouse,61.53
    Jackie Brown,word,sun,61.93
    Jackie Brown,word,nice,62.97
    Jackie Brown,word,mouse,63.07
    Jackie Brown,word,mouse,63.07
    Jackie Brown,word,mouse,66.05
    Jackie Brown,word,loving,67.82
    Jackie Brown,word,cow,67.95
    Jackie Brown,word,ouch,69.70
    Jackie Brown,word,n-word ,70.02
    Jackie Brown,word,pleases,70.03
    Jackie Brown,word,sun,70.05
    Jackie Brown,word,bbbb,70.10
    Jackie Brown,word,please,70.12
    Jackie Brown,word,ouch,70.15
    Jackie Brown,word,cow,70.30
    Jackie Brown,word,nice,70.45
    Jackie Brown,word,cow,70.80
    Jackie Brown,word,cow,70.90
    Jackie Brown,word,sun,70.93
    Jackie Brown,word,mouse,71.20
    Jackie Brown,word,cow,71.23
    Jackie Brown,word,ouch,71.67
    Jackie Brown,word,loving,72.60
    Jackie Brown,word,cow,73.20
    Jackie Brown,word,mouse,73.27
    Jackie Brown,word,cow,73.85
    Jackie Brown,word,mouse,75.37
    Jackie Brown,word,hand,75.38
    Jackie Brown,word,mouse,75.60
    Jackie Brown,word,hello,75.63
    Jackie Brown,word,loving,75.63
    Jackie Brown,word,cow,75.70
    Jackie Brown,word,n-word ,75.70
    Jackie Brown,word,ouch,75.73
    Jackie Brown,word,cow,75.77
    Jackie Brown,word,bee,75.87
    Jackie Brown,word,mouse,76.18
    Jackie Brown,word,helloes,76.32
    Jackie Brown,word,sun,76.72
    Jackie Brown,word,sun,76.92
    Jackie Brown,word,hello,77.05
    Jackie Brown,word,cow,77.35
    Jackie Brown,word,hello,77.47
    Jackie Brown,word,sun,79.37
    Jackie Brown,word,mouse,80.33
    Jackie Brown,word,cow,81.00
    Jackie Brown,word,mouse,81.02
    Jackie Brown,word,mouse,83.92
    Jackie Brown,word,mouse,88.68
    Jackie Brown,word,mouse,88.83
    Jackie Brown,word,heaven,92.38
    Jackie Brown,word,heaven,92.38
    Jackie Brown,word,heaven,92.43
    Jackie Brown,word,mouse,92.52
    Jackie Brown,word,mouse,92.55
    Jackie Brown,word,nice,92.57
    Jackie Brown,word,cow,92.58
    Jackie Brown,word,sun,92.62
    Jackie Brown,word,loving,92.63
    Jackie Brown,word,cow,92.65
    Jackie Brown,word,sun,92.70
    Jackie Brown,word,mouse,92.82
    Jackie Brown,word,sun,92.97
    Jackie Brown,word,ouch,93.03
    Jackie Brown,word,mouse,94.13
    Jackie Brown,word,sun,94.27
    Jackie Brown,word,sun,94.77
    Jackie Brown,word,ouch,94.98
    Jackie Brown,word,mouse,95.07
    Jackie Brown,word,please,95.08
    Jackie Brown,word,please,95.13
    Jackie Brown,word,mouse,96.70
    Jackie Brown,word,loving,96.90
    Jackie Brown,word,heaven,97.37
    Jackie Brown,word,hello,98.02
    Jackie Brown,word,sun,98.07
    Jackie Brown,word,mouse,98.15
    Jackie Brown,word,heavenly,98.17
    Jackie Brown,word,nice,98.23
    Jackie Brown,word,nice,98.45
    Jackie Brown,word,hello,98.45
    Jackie Brown,word,loving,98.47
    Jackie Brown,word,sun,101.37
    Jackie Brown,word,cow,101.92
    Jackie Brown,word,heavenly,101.98
    Jackie Brown,word,hello,102.07
    Jackie Brown,word,loving,102.08
    Jackie Brown,word,sun,102.08
    Jackie Brown,word,nice,102.10
    Jackie Brown,word,sun,102.32
    Jackie Brown,word,cow,102.33
    Jackie Brown,word,sun,105.27
    Jackie Brown,word,cow,106.32
    Jackie Brown,word,nice,109.70
    Jackie Brown,word,cow,109.77
    Jackie Brown,word,loving,109.82
    Jackie Brown,word,mouse,109.97
    Jackie Brown,word,hello,110.13
    Jackie Brown,word,loving,110.15
    Jackie Brown,word,loving,110.52
    Jackie Brown,word,cow,111.27
    Jackie Brown,word,cow,111.83
    Jackie Brown,word,nice,111.85
    Jackie Brown,word,loving,111.90
    Jackie Brown,word,cow,111.97
    Jackie Brown,word,loving,111.98
    Jackie Brown,word,cow,112.07
    Jackie Brown,word,cow,112.35
    Jackie Brown,word,loving,113.18
    Jackie Brown,death,,113.28
    Jackie Brown,word,hello,114.98
    Jackie Brown,word,loving,115.00
    Jackie Brown,word,cow,116.07
    Jackie Brown,word,loving,120.22
    Jackie Brown,word,loving,120.35
    Jackie Brown,word,loving,120.85
    Jackie Brown,word,hello,121.10
    Jackie Brown,word,loving,121.87
    Jackie Brown,word,loving,121.92
    Jackie Brown,word,sun,122.08
    Jackie Brown,word,cow,122.12
    Jackie Brown,word,cow,122.15
    Jackie Brown,word,cow,122.17
    Jackie Brown,word,loving,121.20
    Jackie Brown,word,mouse,122.28
    Jackie Brown,word,hello,123.32
    Jackie Brown,word,mouse,123.63
    Jackie Brown,word,please,124.57
    Jackie Brown,word,heaven,124.65
    Jackie Brown,word,sun,124.68
    Jackie Brown,word,pleases,124.75
    Jackie Brown,word,loving,124.83
    Jackie Brown,word,loving,124.85
    Jackie Brown,word,loving,124.88
    Jackie Brown,word,loving,124.90
    Jackie Brown,word,nice,124.97
    Jackie Brown,word,please,125.07
    Jackie Brown,word,sun,125.10
    Jackie Brown,word,mouse,125.12
    Jackie Brown,word,loving,125.15
    Jackie Brown,word,cow,125.33
    Jackie Brown,word,sun,125.37
    Jackie Brown,death,,125.43
    Jackie Brown,word,mouse,126.42
    Jackie Brown,word,loving,126.62
    Jackie Brown,word,loving,127.07
    Jackie Brown,word,loving,127.42
    Jackie Brown,word,loving,128.38
    Jackie Brown,word,heavenly,128.42
    Jackie Brown,word,please,128.47
    Jackie Brown,word,cow,129.17
    Jackie Brown,word,loving,129.57
    Jackie Brown,word,nice,130.90
    Jackie Brown,word,heavenly,130.92
    Jackie Brown,word,heavenly,131.00
    Jackie Brown,word,please,131.08
    Jackie Brown,word,please,131.18
    Jackie Brown,word,mouse,131.22
    Jackie Brown,word,n-word ,131.25
    Jackie Brown,word,please,131.28
    Jackie Brown,word,nice,131.35
    Jackie Brown,word,please,131.38
    Jackie Brown,word,mouse,131.40
    Jackie Brown,word,nice,131.45
    Jackie Brown,word,mouse,131.57
    Jackie Brown,word,n-word ,131.80
    Jackie Brown,word,heavenly,132.78
    Jackie Brown,word,sun,133.05
    Jackie Brown,word,heavenly,133.13
    Jackie Brown,word,cow,134.00
    Jackie Brown,word,nice,134.02
    Jackie Brown,word,loving,134.07
    Jackie Brown,word,sun,134.18
    Jackie Brown,word,please,134.33
    Jackie Brown,word,please,134.50
    Jackie Brown,word,n-word ,134.78
    Jackie Brown,word,mouse,135.00
    Jackie Brown,word,sun,135.67
    Jackie Brown,word,dumbsun,135.72
    Jackie Brown,word,bbbb,136.72
    Jackie Brown,word,loving,136.90
    Jackie Brown,word,sun,137.13
    Jackie Brown,word,n-word ,137.13
    Jackie Brown,word,nice,138.20
    Jackie Brown,word,bbbb,141.03
    Jackie Brown,word,hello,141.20
    Jackie Brown,word,nice,141.23
    Jackie Brown,word,please,141.35
    Jackie Brown,word,n-word ,141.50
    Jackie Brown,word,please,141.55
    Jackie Brown,word,please,141.80
    Jackie Brown,word,please,141.93
    Jackie Brown,word,sun,142.43
    Jackie Brown,word,loving,142.47
    Jackie Brown,word,nice,142.97
    Jackie Brown,death,,143.13
  ];`;

export default script;
